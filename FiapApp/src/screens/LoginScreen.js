import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, 
  Pressable, StatusBar } from 'react-native';
import { auth } from '../configs/fiap_firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  useEffect(() => { 
    console.log('Effect 1');
    // Se já estiver autenticado, redirecionar para a tela de Lista
    auth.onAuthStateChanged((user) => {
        console.log('Effect 2', user);
        
      if (user != null) {
        navigation.replace('Lista');
      }
    });
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, inputEmail, inputPassword).then(() => {
        navigation.replace('Lista')
    })
    .catch((err) => {
        console.log("Sign In Error", err)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'E-mail'}
            value={inputEmail}
            onChangeText={(value) => setInputEmail(value)}            
          />
        </View>      
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'Password'}
            secureTextEntry={true}
            value={inputPassword}
            onChangeText={(value) => setInputPassword(value)}            
          />
        </View>      

        <View style={styles.textInputRow}>
          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable >
        </View>
        <View style={styles.cadastrarRow}>
          <Pressable style={styles.buttonCadastrar} onPress={() => navigation.replace('Cadastrar')}>
            <Text>Não tem cadastro? Cadastre-se</Text>
          </Pressable>
        </View>
      </View>      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    padding: 8,
  },
  textInputLabel: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 14,
  },
  textInputRow: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
  messageContainer: {
    margin: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMessage: {
    color: 'black',
    margin: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 8,
    borderRadius: 8,
    padding: 16,    
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
  },
  cadastrarRow: {
    alignItems: 'center',
  },
});