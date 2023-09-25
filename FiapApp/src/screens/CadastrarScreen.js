import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, 
  Pressable, StatusBar } from 'react-native';

export default function CadastrarScreen({ navigation }) {
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    emailConfirmacao: "",
    senha: "",
    senhaConfirmacao: ""
  });

  const cadastrar = async () => {
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'E-mail'}
            value={registerInformation.email}
            onChangeText={(value) => setRegisterInformation({
              ...registerInformation,
              email: value
            })}            
          />
        </View>      
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'Confirmação do E-mail'}
            value={registerInformation.emailConfirmacao}
            onChangeText={(value) => setRegisterInformation({
              ...registerInformation,
              emailConfirmacao: value
            })}            
          />
        </View>      
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'Senha'}
            secureTextEntry={true}
            value={registerInformation.senha}
            onChangeText={(value) => setRegisterInformation({
              ...registerInformation,
              senha: value
            })}            
          />
        </View>      
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'Confirmação da Senha'}
            secureTextEntry={true}
            value={registerInformation.senhaConfirmacao}
            onChangeText={(value) => setRegisterInformation({
              ...registerInformation,
              senhaConfirmacao: value
            })}            
          />
        </View>      
        <View style={styles.textInputRow}>
          <Pressable style={styles.button} onPress={cadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable >
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
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
  },
});