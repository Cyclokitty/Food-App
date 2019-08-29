import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const ResultsList = ({category, restaurants}) => {
    return (
        <View> 

            {restaurants.length > 0 ? <Text style={styles.categoryTitle}>{category}</Text> : null}          
            
            <FlatList 
            data={restaurants}
            renderItem={({ item }) => 
                <View style={styles.resultView}>
                    
                    <Image 
                        style={{ width: 150, height: 150 }}
                        source={{ uri: item.image_url }}
                    />
                    <Text 
                        style={styles.listText}
                        numberOfLines={2}>
                        {item.name} 
                        
                    </Text>
                    <Text>{item.rating} Stars & {item.review_count} reviews</Text>
                </View>}            
            keyExtractor={(item) => item.id}
            horizontal={true}           
            />           
        </View>
    )
};

const styles = StyleSheet.create({
    categoryTitle: {
        fontSize: 24,
        color: '#58994c'
    },
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

export default ResultsList;