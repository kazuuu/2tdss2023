import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { ThemeContext, themes } from '../context/ThemeContext'


export default function ThemeToggler() {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { backgroundColor: theme.background, color: theme.foreground}]}>
                { theme === themes.dark ? 'Lua' : 'Sol' }
            </Text>
            <TouchableOpacity onPress={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <Text style={{backgroundColor: theme.background, color: theme.foreground, padding: 8, margin: 8}}>Toggle Theme</Text>
            </TouchableOpacity>
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