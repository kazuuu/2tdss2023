import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../constants/dummyData'
import CategoryItem from '../components/categoryItem';
import FoodItem from '../components/foodItem';
import { PedidosContext } from '../contexts/PedidosContext';

const HomeScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [foodList, setFoodList] = useState([]);

  const {pedidos, initPedidos, addPedido} = useContext(PedidosContext);

  useEffect(() => {
    const init = async () => {
      initPedidos();
    }

    init();
  }, []);

  const clickCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);

    if (categoryId == 1)
      setFoodList(api.foodListTemp1);
    else if (categoryId == 2)
      setFoodList(api.foodListTemp2);
    else if (categoryId == 3)
      setFoodList(api.foodListTemp3);
  }

  const clickAdicionarFood = async (food) => {   
    addPedido(food);
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
          <FoodItem data={item} Bottom={() => {
            return (
              <Button 
                title='Adicionar' 
                onPress={() => clickAdicionarFood(item)} 
              />
            );
          }} />
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