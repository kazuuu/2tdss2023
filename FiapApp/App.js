import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <View style={{ height: '10%', width: '10%', backgroundColor: 'red'}} />
        <View style={{ height: '10%', width: '10%', backgroundColor: 'green'}} />
        <View style={{ height: '10%', width: '10%', backgroundColor: 'blue'}} />
        <StatusBar style="auto" />
      </View>
    )
  }
}


