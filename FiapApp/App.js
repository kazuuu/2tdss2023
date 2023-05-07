import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomInput from './src/components/CustomInput';
import getImage from './src/utils/ImagesForWeather';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  render() {
    const { location } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground 
          resizeMode='cover'
          source={getImage('Drizzle')}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

          <CustomInput 
            placeholder='Search and City' 
            onSubmit={(novoTexto) => this.setState({location: novoTexto})} 
          />

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
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Rules' : 'Roboto',
  },
  smallText: {
    fontSize: 18,
  },
  mediumText: { 
    fontSize: 26,
  },
  largeText: { 
    fontSize: 44,
  },
});
