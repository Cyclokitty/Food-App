import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    console.log(results);

    // filter results by price
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <View style={styles.container}>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results so far.</Text>
            {errorMessage.length > 0 ? <Text>Sorry, network error. Please try again later</Text> : null}

            <ResultsList restaurants={ filterResultsByPrice('$') } category={'Inexpensive'}/>
            <ResultsList restaurants={ filterResultsByPrice('$$') } category={'Affordable'}/>
            <ResultsList restaurants={ filterResultsByPrice('$$$') } category={'Many Moneys'}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fffbe5',
    },
});

export default SearchScreen;