import React, { createContext } from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee'
    },
    dark: {
      foreground: '#FFFFFF',
      background: '#222222'
    },
  }
  
export const ThemeContext = createContext();
