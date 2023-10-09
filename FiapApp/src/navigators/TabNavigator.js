import React, { useEffect, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PedidoScreen from '../screens/PedidoScreen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen 
      name="Pedido" component={PedidoScreen} 
      options={{
        tabBarLabel: 'Pedido',
        tabBarIcon: ({focused, color, size}) => (
          <Ionicons name="information-circle" color={color} size={size} />
        )
      }}          
    />
  </Tab.Navigator>        
);

};
  
const styles = StyleSheet.create({
  container: {
  },
});
  
export default TabNavigator;