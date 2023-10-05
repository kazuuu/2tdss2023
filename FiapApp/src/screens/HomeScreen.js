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
    // Cria um id único baseado na data e hora 
    let idPedido = Math.floor(Date.now());

    //*** Para adicionar um atributo em um Objeto é aconselhável utilizar o 
    // Spread operator (...)
    food = {...food, "idCart": idCart}
    

    //*** Para adicionar um item em um Array é aconselhável utilizar o 
    // Spread operator (...), porém se for utilizaro push precisa lembrar
    // de utilizar de forma sincrona com o await */
    //    await pedidos.push(food);
    // ou com spread operator:
    //    pedidos = [...pedidos, food];
    await setPedidos([...pedidos, food]);
    console.log("Adicionar 6", pedidos);

    // Lembrar de transformar o objeto em uma string antes de gravar
    // no AsyncStorage
    await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos));
    alert('Adicionado')   

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