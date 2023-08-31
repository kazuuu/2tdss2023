import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Button
} from 'react-native';

import api from '../constants/dummyData'

const FoodItem = ({data, selected, Bottom}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'stretch',
      borderRadius: 8,
      padding: 8,
      margin: 8,
      backgroundColor: selected ? 'orange' : '#ccc',
      width: 250,
    },
    textSmall: {
      fontSize: 14,
    },
    textMedium: {
      fontSize: 18,
    },
    textLarge: {
      fontSize: 22,
    },
    topView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    calories: {
      flexDirection: 'row',
    },
    conteudo: {
      alignItems: 'center',
    }
  });

  return (
    <Pressable 
      onPress={() => null}
      style={styles.container}
    >
      <View style={styles.topView}>
        <View style={styles.calories}>
          <Image
            source={require("../../assets/icons/calories.png")}
            style={{
            height: 50,
            width: 50,
            }}
          />     
          <Text>{data.calories} Calories</Text>
        </View>

        <Image
          source={require("../../assets/icons/love.png")}
          style={{
          height: 50,
          width: 50,
          alignSelf: 'center'
          }}
        />            
      </View>

      <View style={styles.conteudo}>
        <Image
          source={data.image}
          style={{
          height: 200,
          width: 200,
          }}
        />            
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.textLarge}>{data.name}</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.textSmall}>{data.description}</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.textMedium}>R$ {data.price}</Text>
      </View>
      <View style={styles.conteudo}>
          <Bottom />
      </View>
    </Pressable>
  );
};

export default FoodItem;