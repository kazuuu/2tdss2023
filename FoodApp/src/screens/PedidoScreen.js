import React, { useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  Button,
} from 'react-native';
import FoodItem from '../components/foodItem';
import { PedidosContext } from '../contexts/PedidosContext';
import { db } from '../configs/firebaseConfig';
import { push, set, ref, onValue, remove, update, child } from 'firebase/database';

const PedidoScreen = () => {

  const { pedidos, setPedidos } = useContext(PedidosContext);

  useEffect(() => { 

    const init = async () => {
      onValue(ref(db, '/pedidos'), (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          Object.values(data).map((item) => {
            setPedidos(oldArray => [...oldArray, item])
          });
        }
      });
    }

    init();
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