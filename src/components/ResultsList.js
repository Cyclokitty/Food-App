import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const ResultsList = ({category, restaurants}) => {

    return (
        <View>
            <Text style={styles.categoryTitle}>{category}</Text>
            <FlatList 
            data={restaurants}
            renderItem={({ item }) => 
                <View>
                    <Image 
                        style={{ width: 125, height: 125 }}
                        source={{ uri: item.image_url }}
                    />
                    <Text style={styles.listText}>{item.name} </Text>
                </View>
                
            
            }
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
        fontSize: 16,
        color: '#4C5899'
    }
});

export default ResultsList;