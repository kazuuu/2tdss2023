import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import api from '../constants/dummyData'

const CategoryItem = ({data}) => {
    return (
        <View style={styles.container}>
            <Image
                source={data.icon}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: '#000',
                }}
            />            
            <Text>{data.name}</Text>
        </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'orange',


    },
  });
  
  export default CategoryItem;