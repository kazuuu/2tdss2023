import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { ThemeContext, themes } from './src/context/ThemeContext'
import ThemeToggler from './src/components/Toggler';


export default function App() {
  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Header />
      <ThemeToggler />
    </ThemeContext.Provider>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
