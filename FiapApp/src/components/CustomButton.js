import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class CustomButton extends React.Component {
  render() {
    return (
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
        <Text>{this.props.texto}</Text>
      </TouchableOpacity>
    );  
  }
}