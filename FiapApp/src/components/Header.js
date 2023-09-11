import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext, themes } from '../context/ThemeContext'


export default function Header() {
    const theme = useContext(ThemeContext)[0];

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { backgroundColor: theme.background, color: theme.foreground}]}>
                { theme === themes.light ? 'Light Mode' : 'Dart Mode' }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        height: 80,
        fontSize: 30,
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})