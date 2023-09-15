import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../contexts/AuthContextProvider'

export default function HomeScreen() {
  const {currentUser, loggedIn, signIn, logout} = useContext(AuthContext);

  return (
  <View style={styles.container}>
     { loggedIn == true ?
     (
      <View style={styles.container}>
        <Text style={styles.text}>
          Wecome { currentUser.username } 
        </Text>
        <Button title='Sair' onPress={() => logout()}></Button>
      </View>
     ) : 
     (
      <View style={styles.container}>
        <Text style={styles.text}>
          Faça Login 
        </Text>
        <Button title='Entrar' onPress={() => signIn("Marcello", "123")} />
      </View>
     )
     }   
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 80,
    fontSize: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});