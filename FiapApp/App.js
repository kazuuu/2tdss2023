import { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [outroValor, setOutroValor] = useState(0);

  useEffect(() => {
    alert('Componente renderizado!');
  }, [outroValor])
  
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Nº de cliques: {contador}</Text>
      <Text>Outro Valor: {outroValor}</Text>
      <Button title="Clique Aqui" onPress={() => setContador(contador + 1)} />
      <Button title="outroValor" onPress={() => setOutroValor(outroValor + 1)} />
    </View>
  );
}

