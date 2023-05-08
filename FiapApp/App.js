import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
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
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

function DetalhesScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DETALHES</Text>
      <Button 
        title='Ir Para Detalhes novamente' 
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

