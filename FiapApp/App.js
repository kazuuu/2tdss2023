import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Nº de cliques: {contador}</Text>
      <Button title="Clique Aqui" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

