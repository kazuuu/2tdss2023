import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import api from '../constants/dummyData'
import CategoryItem from '../components/categoryItem';


const HomeScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);

  const clickCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  }

  return (
        <View style={styles.container}>
            <FlatList
              horizontal
              data={api.categories}
              renderItem={({item}) => (
                <CategoryItem data={item} selected={item.id == selectedCategoryId} onClick={clickCategory} />
              )}
              keyExtractor={item => item.id.toString()}
            />
        </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
  });
  
  export default HomeScreen;