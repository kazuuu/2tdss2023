import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
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

  const clickAdicionarFood = async (food) => {
    console.log("Adicionar 1", food)
    let s = await AsyncStorage.getItem('pedidos');
    let pedidos;

    if (s == null) {
      console.log("Adicionar 2")
      pedidos = [];
    } else {
      console.log("Adicionar 3", s)
      pedidos = JSON.parse(s);
      console.log("Adicionar 4", pedidos)
    }
      
    console.log("Adicionar 5", pedidos)
    
    // Cria um id único baseado na data e hora 
    let idCart = Math.floor(Date.now());

    //*** Para adicionar um atributo em um Objeto é aconselhável utilizar o 
    // Spread operator (...)
    food = {...food, "idCart": idCart}
    

    //*** Para adicionar um item em um Array é aconselhável utilizar o 
    // Spread operator (...), porém se for utilizaro push precisa lembrar
    // de utilizar de forma sincrona com o await */
    //    await pedidos.push(food);
    // ou com spread operator:
    //    pedidos = [...pedidos, food];
    pedidos = [...pedidos, food];
    console.log("Adicionar 6", pedidos);

    // Lembrar de transformar o objeto em uma string antes de gravar
    // no AsyncStorage
    await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
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