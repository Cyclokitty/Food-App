import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const RestaurantDetailScreen = ({ navigation }) => {
    const [results, setResults] = useState(null);

    const id = navigation.getParam('id');

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
    }

    useEffect(() => {
        getRestaurant(id);
    }, []);

    console.log(results);

    return (      
        <View>
            {results !== null 
            ? <View>
                <Text>{results.name}</Text>
                <Text>{results.display_phone}</Text>
                    <FlatList 
                        data={results.location.display_address}
                        renderItem={({item}) => <Text>{item}</Text>}
                        keyExtractor={(index) => index}
                    />
                    
                    <FlatList 
                        data={results.photos}
                        renderItem={({item}) => <Image style={{ width: 175, height: 132, borderRadius: 4 }} source={{uri: item}} />} 
                        keyExtractor={(index) => index}
                    />
                </View>
            : null
            }
            
        </View> 
    )
};

const styles = StyleSheet.create({
    
});

export default RestaurantDetailScreen;

