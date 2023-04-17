import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <CustomButton texto='1' /> 
          <CustomButton texto='2' /> 
          <CustomButton texto='3' /> 
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton texto='4' /> 
          <CustomButton texto='5' /> 
          <CustomButton texto='6' /> 
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton texto='7' /> 
          <CustomButton texto='8' /> 
          <CustomButton texto='9' /> 
        </View>
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
