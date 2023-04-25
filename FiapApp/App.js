import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ 
        flex: 1,
        alignItems: 'center',
      }}>
        <View style={{ height: 50, width: 50, backgroundColor: 'red'}} />
        <View style={{ height: 50, width: 50, backgroundColor: 'green', alignSelf: 'flex-start'}} />
        <View style={{ height: 50, width: 50, backgroundColor: 'blue'}} />
        <StatusBar style="auto" />
      </View>
    )
  }
}


