import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    console.log(results);
    // filter results
    const cheap = results.filter(el => {
        if (el.price === '$') {
            return el;
        }
    });

    const affordable = results.filter(el => {
        if (el.price === '$$' ) {
            return el;
        }
    });

    const pricy = results.filter(el => {
        if (el.price >= '$$$') {
            return el;
        }
    });

    console.log(cheap);
    console.log(affordable);
    console.log(pricy);


    return (
        <View style={styles.container}>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results so far.</Text>
            {errorMessage.length > 0 ? <Text>Sorry, network error. Please try again later</Text> : null}

            <ResultsList restaurants={cheap} category={'Inexpensive'}/>
            <ResultsList restaurants={affordable} category={'Affordable'}/>
            <ResultsList restaurants={pricy} category={'Many Moneys'}/>
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