import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const RestaurantDetailScreen = ({navigation}) => {
    const [searchID, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        setSearchId(navigation.state.params.id);
        setSearchName(navigation.state.params.name)
    }, []);

    return (
        <View>
            <Text>You clicked: </Text>
            <Text>{searchName}</Text>
            <Text>{searchID}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default RestaurantDetailScreen;

