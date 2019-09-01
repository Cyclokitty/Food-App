import React, { useState, useEffect } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
        <View style={styles.container}>
            {results !== null 
            ? <View style={styles.container}>
                <Text style={styles.categoryTitle}>{results.name}</Text>
                <Text style={styles.detailsText}>{results.display_phone}</Text>

                    {results.location.display_address.map((item, index) => {
                        return <Text key={index} style={styles.detailsText}>{item}</Text>
                    })}

                    <ScrollView>
                        <FlatList 
                            data={results.photos}
                            renderItem={({item}) => <Image style={{ width: 300, height: 200, borderRadius: 4, marginBottom: 10, alignSelf: 'center' }} source={{uri: item}} />} 
                            keyExtractor={(index) => index}
                        />
                    </ScrollView>
                </View>
            : null
            }
            
        </View> 
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fffbe5',
        padding: 5,
        justifyContent: 'center',
    },
    categoryTitle: {
        fontSize: 24,
        color: '#58994c',
        alignSelf: 'center'
    },
    detailsText: {
        fontSize: 18,
        alignSelf: 'center',
    }
});

export default RestaurantDetailScreen;

