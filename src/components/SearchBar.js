import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

const SearchBar = ({ onTermChange, onTermSubmit, term }) => {
    return (
        <View style={styles.container}>
            <Icon 
                name='search'
                size={40}
                type='feather'
                color='#333'
                style={styles.iconStyle}
            />            
            <TextInput
                style={styles.inputText}
                placeholder='Search'               
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
                onChangeText={newTerm => onTermChange(newTerm)}
                value={term}
            />
        </View>
            
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eeee',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
    },
    inputText: {
        fontSize: 18,
        padding: 10,
        flex: 1,
    },
    iconStyle: {
        alignSelf: 'center',
    },
});

export default SearchBar;