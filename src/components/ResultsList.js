import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ResultsList = (props) => {

    return (
        <View>
            <Text style={styles.categoryTitle}>{props.category}</Text>
            <FlatList 
            data={props.restaurants}
            renderItem={({ item }) => <Text style={styles.listText}>{item.name} </Text>}
            keyExtractor={(item) => item.id}
            horizontal={true}           
            />
        </View>
    )
};

const styles = StyleSheet.create({
    categoryTitle: {
        fontSize: 24,
        color: '#994c58'
    },
    listText: {
        fontSize: 18,
        color: '#4C5899'
    }
});

export default ResultsList;