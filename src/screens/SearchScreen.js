import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        console.log('hi here');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Toronto'
                }
            });
            setResults(response.data.businesses);
        }
        catch(error) {
            console.log(`Error: ${error.message}`);
            setErrorMessage('Sorry, error has occurred. Please try later');
            
        }
    };

    // call searchApi() when component is first rendered
    //searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    }, []);

    console.log(results);

    return (
        <View style={styles.container}>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results so far.</Text>
            {errorMessage.length > 0 ? <Text>Sorry, network error. Please try again later</Text> : null}
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