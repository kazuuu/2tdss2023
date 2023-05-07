import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Ola = (props) => <Text>{`Olá, ${props.saudacao} ${props.nome}`}</Text>

export default function App() {
  return (
    <View style={styles.container}>
      <Ola saudacao = 'Sr.' nome = 'Joao' />
    </View>
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
