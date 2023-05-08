import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Visão Geral',
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetalhesScreen} 
          options={({route}) => ({title: route.params.nome})}
        />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HOME</Text>
      <Button 
        title='Ir Para Detalhes' 
        onPress={() => navigation.navigate("Detalhes", {
          nome: 'Teste1',
        })}
      />
    </View>
  );
}

function DetalhesScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DETALHES</Text>
      <Button 
        title='Ir Para Detalhes novamente' 
        onPress={() => navigation.push("Detalhes")}
      />
      <Button 
        title='Voltar' 
        onPress={() => navigation.goBack()}
      />
      <Button 
        title='Voltar para a primeira tela da pilha' 
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

