import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'red'}} />
        <View style={{ flex: 2, backgroundColor: 'green'}} />
        <View style={{ flex: 3, backgroundColor: 'blue'}} />
        <StatusBar style="auto" />
      </View>
    )
  }
}


