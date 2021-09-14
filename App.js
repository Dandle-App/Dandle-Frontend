import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyledContainer } from './styles/styles.js';

//screens
import Welcome from './screens/Welcome';
import UserSignIn from './screens/UserSignIn';
import SignIn from './screens/SignIn.js';

export default function App() {
  return (
    <SignIn />
  );
}

