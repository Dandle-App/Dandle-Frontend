import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyledContainer } from './styles/styles.js';

//screens
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <Welcome />
    
  );
}

