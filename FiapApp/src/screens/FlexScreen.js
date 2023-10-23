import React, { useEffect, useContext, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon} >
        <Ionicons name="at-outline" color={'#000'} size={100} />
        <Text style={styles.number}>10</Text>
      </View>

      <View style={styles.row}>
        <Text>TEXTO 1</Text>
        <Text>TEXTO 2</Text>
        <Text>TEXTO 3</Text>
      </View>

    </View>
  );

};
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    icon: {
      flex: 1,
      alignItems: 'flex-end',
    }, 
    number: {
      backgroundColor: 'gray',
      padding: 8,
      borderRadius: 25,
      marginTop: -30,

    },
    row: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'green',
      justifyContent: 'space-around'
    }
  });
  
export default FlexScreen;