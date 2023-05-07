import { Text, View } from 'react-native';

const Ola = (props) => <Text>{`Olá, ${props.saudacao} ${props.nome}`}</Text>

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Ola saudacao = 'Sr.' nome = 'Joao' />
    </View>
  );
}