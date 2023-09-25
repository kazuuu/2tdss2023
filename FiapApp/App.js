import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarScreen from "./src/screens/CadastrarScreen";
import ListaScreen from "./src/screens/ListaScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: 'purple',
        headerStyle: {
          backgroundColor: 'transparent',
          borderBottomWidth: 1,
          borderBottomColor: '#000',
        },
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'normal',
        }
      }}        
    >
      <Stack.Screen name='Cadastrar' component={CadastrarScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Lista' component={ListaScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
