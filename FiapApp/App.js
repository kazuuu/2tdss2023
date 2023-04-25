import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <View style={{ height: '10%', width: '10%', backgroundColor: 'powderblue'}} />
        <View style={{ height: '10%', width: '10%', backgroundColor: 'skyblue'}} />
        <View style={{ height: '10%', width: '10%', backgroundColor: 'steelblue'}} />
        <StatusBar style="auto" />
      </View>
    )
  }
}


