import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>São Paulo</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

        <TextInput 
          autoCorrect='false'
          placeholder='Search and City'
          placeholderTextColor='white'
          style={styles.textInput}
        />
        <StatusBar style="auto" />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Rules' : 'Roboto',
  },
  smallText: {
    fontSize: 18,
  },
  mediumText: { 
    fontSize: 26,
  },
  largeText: { 
    fontSize: 44,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
