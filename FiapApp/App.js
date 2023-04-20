import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: 'https://picsum.photos/200/300'}}
          resizeMode = 'cover'
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',        
          }}
        >
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
