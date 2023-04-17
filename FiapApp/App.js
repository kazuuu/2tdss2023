import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={this.onPress}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ccc',
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
          }} 
        >
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.onPress}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ccc',
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
          }} 
        >
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.onPress}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ccc',
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
          }} 
        >
          <Text>3</Text>
        </TouchableOpacity>
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
});
