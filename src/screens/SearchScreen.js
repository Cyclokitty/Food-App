import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchBarText, setSearchBarText] = useState('');

    return (
        <View style={styles.container}>
            <SearchBar 
                onSearchText={(newText) => setSearchBarText(newText)}
                value={searchBarText}
            />
            <Text>{searchBarText}</Text>
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