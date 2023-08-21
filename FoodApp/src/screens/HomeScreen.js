import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import api from '../constants/dummyData'
import CategoryItem from '../components/categoryItem';
import FoodItem from '../components/foodItem';


const HomeScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [foodList, setFoodList] = useState([]);

  const clickCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);

    if (categoryId == 1)
      setFoodList(api.foodListTemp1);
    else if (categoryId == 2)
      setFoodList(api.foodListTemp2);
    else if (categoryId == 3)
      setFoodList(api.foodListTemp3);

  }
  const clickFood = () => {
    
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
      <FlatList
        horizontal
        data={foodList}
        renderItem={({item}) => (
          <FoodItem data={item} onClick={clickFood} />
        )}
        keyExtractor={item => item.id.toString()}
      />


    </View>
  );
};
  
const styles = StyleSheet.create({
    container: {
    },
  });
  
  export default HomeScreen;