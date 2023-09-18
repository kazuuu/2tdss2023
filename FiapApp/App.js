import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { db } from './firebase';
import { set, ref, onValue, remove, update, push, child } from "firebase/database";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    onValue(ref(db, `/items`), (snapshot) => {
      setData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) => {
          setData((oldArray) => [...oldArray, item]);
        });
      }
    });

  }, []);

  const adicionar = (value) => {
    const id = push(child(ref(db), 'items')).key
    set(ref(db, `/items/${id}`), {
      id: id,
      descricao: value,
    })
  }

  return (
    <View style={styles.container}>

      <Pressable style={styles.button} onPress={() => adicionar("TESTE 2")}>
        <Text>BOTAO!</Text>
      </Pressable>

      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => {
          console.log("data", data);
          return (
          <Text style={{
            color: '000'
          }}>{item.descricao}</Text>
        )}
        } />

      <StatusBar style="auto" />
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
