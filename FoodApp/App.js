import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import PedidoScreen from './src/screens/PedidoScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { View, Text } from 'react-native';
import { PedidosContext } from './src/contexts/PedidosContext';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  const [pedidos, setPedidos] = useState([]);

  return (
    <PedidosContext.Provider value={[pedidos, setPedidos]}>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator> */}
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
      </NavigationContainer>
    </PedidosContext.Provider>      
  );
};

export default App;
