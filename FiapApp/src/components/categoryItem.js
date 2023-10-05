import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable
} from 'react-native';

import api from '../constants/dummyData'

const CategoryItem = ({data, selected, onClick}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      padding: 8,
      margin: 8,
      backgroundColor: selected ? 'orange' : '#ccc',
    },
    text: {
      fontSize: 22,
    },
  });

  return (
    <Pressable 
      onPress={() => onClick(data.id)}
      style={styles.container}
    >
      <Image
        source={data.icon}
        style={{
        height: 50,
        width: 50,
        }}
      />            
      <Text style={styles.text}>{data.name}</Text>
    </Pressable>
  );
};

export default CategoryItem;