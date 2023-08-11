import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ABOUT SCREEN</Text>
        </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
  
  export default AboutScreen;