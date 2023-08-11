import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HOME SCREEN</Text>
        </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'

    },
  });
  
  export default HomeScreen;