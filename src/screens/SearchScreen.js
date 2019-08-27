import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async() => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'Toronto'
            }
        });
        setResults(response.data.businesses);
    };

    console.log(results);

    return (
        <View style={styles.container}>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            <Text>We have found {results.length} results so far.</Text>
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