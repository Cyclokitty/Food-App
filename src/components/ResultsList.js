import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';

const ResultsList = ({ category, restaurants }) => {
    return (
        <View> 

            {restaurants.length > 0 ? <Text style={styles.categoryTitle}>{category}</Text> : null}          
            
            <FlatList 
            data={restaurants}
            renderItem={({ item }) => 
                <RestaurantCard 
                    image={item.image_url}
                    name={item.name}
                    rating={item.rating}
                    reviews={item.review_count}
                    id={item.id}
                />             
            }            
            keyExtractor={(item) => item.id}
            horizontal={true}     
            showsHorizontalScrollIndicator={false}      
            />           
        </View>
    )
};

const styles = StyleSheet.create({
    categoryTitle: {
        fontSize: 24,
        color: '#58994c'
    },
    
});

export default ResultsList;