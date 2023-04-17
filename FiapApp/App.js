import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{
              alignItems: 'center',
              backgroundColor: '#DDDDDD',
              padding: 10,
              borderRadius: 20,
        }} onPress={this.onPress}>
          <Text>Aperte Aqui</Text>
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
