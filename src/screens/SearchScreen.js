import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
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

            {errorMessage.length > 0 ? <Text>Sorry, network error. Please try again later</Text> : null}

            <ScrollView>
                <ResultsList restaurants={ filterResultsByPrice('$') } category={'Inexpensive'} navigation={navigation}/>
                <ResultsList restaurants={ filterResultsByPrice('$$') } category={'Pricier'} navigation={navigation}/>
                <ResultsList restaurants={ filterResultsByPrice('$$$') } category={'Many Moneys'} navigation={navigation}/>
                <ResultsList restaurants={ filterResultsByPrice('$$$$') } category={'Super Luxury'} navigation={navigation}/>
            </ScrollView>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fffbe5',
        padding: 5,
    },
});

export default SearchScreen;