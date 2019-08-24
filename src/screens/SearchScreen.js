import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fffbe5',
    },
    title: {
        color: '#3F7F6A',
        fontSize: 24,
        alignSelf: 'center',
    }
});

export default SearchScreen;