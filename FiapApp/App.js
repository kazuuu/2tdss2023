import React from 'react';
import AuthContextProvider from './src/contexts/AuthContextProvider'
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <AuthContextProvider>
      <HomeScreen />
    </AuthContextProvider>
  );  
}