import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { Button } from 'react-native';


const App = () => {
  const [userList, setuserList] = useState([
    { id: 1, nome: 'Marcello' },
    { id: 2, nome: 'Joao' },
    { id: 3, nome: 'Maria' },
    { id: 4, nome: 'Celia' },
    { id: 5, nome: 'Celia' },
    { id: 6, nome: 'Celia' },
    { id: 7, nome: 'Celia' },
    { id: 8, nome: 'Celia' },
    { id: 9, nome: 'Celia' },
    { id: 10, nome: 'Celia' },
    { id: 11, nome: 'Celia' },
    { id: 12, nome: 'Celia' },
    { id: 13, nome: 'Celia' },
    { id: 14, nome: 'Celia' },
    { id: 15, nome: 'Celia' },
    { id: 16, nome: 'TESTE' },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor='green'
        barStyle='default'
        hidden={true}
      />
      <Text style={styles.font4}>
        Lista de Usuarios:
      </Text>
      <FlatList
        style={styles.list}
        data ={userList}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.font3}>{item.id} - {item.nome}</Text>

            <Pressable>
              <Text style={styles.font4}>X</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgDark: {
    backgroundColor: '#ccc',
  },
  list: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  font1: {
    fontSize: 12
  },
  font2: {
    fontSize: 22
  },
  font3: {
    fontSize: 32
  },
  font4: {
    fontSize: 42
  },

});

export default App;
