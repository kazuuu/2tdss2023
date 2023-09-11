import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  Button,
} from 'react-native';
import FoodItem from '../components/foodItem';

const PedidoScreen = () => {
  [pedidos, setPedidos] = useState([]);

  
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      let s = await AsyncStorage.getItem('pedidos');
      console.log("Pedidos 1", s)
      if (s != null) {
        await setPedidos(JSON.parse(s));  
      }

      console.log("Pedido 2", pedidos);   
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const clickRemoverFood = async (idCart) => {
    console.log("remover 1", idCart)
    await setPedidos(pedidos.filter(obj => obj.idCart !== idCart));
    await AsyncStorage.setItem('pedidos', JSON.stringify(pedidos))
  }

  return (
    <View style={styles.container}>
      <Text>PEDIDOS SCREEN</Text>
      <FlatList
        data={pedidos}
        renderItem={({item}) => (
          <FoodItem data={item} Bottom={() => {
            return (
              <Button 
                title='Remover' 
                onPress={() => clickRemoverFood(item.idCart)} 
              />
            );
          }} />
        )}
        keyExtractor={item => item.idCart}
      />

    </View>
  );

};
  
const styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
  
  export default PedidoScreen;