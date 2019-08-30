import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RestaurantCard = ({image, name, rating, reviews, id}) => {
    return (
        <View style={styles.resultView}>
            <TouchableOpacity
                onPress={() => console.log(`clickky! ${name} & ${id}`)}
            >
                <Image 
                    style={{ width: 175, height: 132, borderRadius: 4 }}
                    source={{ uri: image }}
                />
                <Text
                    style={styles.listText} 
                    numberOfLines={2}
                >
                    {name}
                </Text>                      
                <Text>{rating} Stars & {reviews} reviews</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    resultView: {
        margin: 10,
        padding: 10,
        width: 200,
        height: 'auto',
    },
    listText: {
        fontSize: 16,
        color: '#4C5899'
    }
});

export default RestaurantCard;