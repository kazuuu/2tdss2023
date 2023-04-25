import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={{ height: 50, width: 50, backgroundColor: 'powderblue'}} />
        <View style={{ height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{ height: 50, width: 50, backgroundColor: 'steelblue'}} />
        <StatusBar style="auto" />
      </View>
    )
  }
}