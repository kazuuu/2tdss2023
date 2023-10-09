import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PedidoScreen from './src/screens/PedidoScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { PedidosContextProvider } from './src/contexts/PedidosContext';
import LoginScreen from './src/screens/LoginScreen';
import CadastrarScreen from './src/screens/CadastrarScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PedidosContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
          <Stack.Screen name="HomeTabs" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PedidosContextProvider>      
  );
};

export default App;
