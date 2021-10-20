import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import { Provider, useDispatch } from 'react-redux';
import { store } from './app/store';

//screens
import RootStack from './app/RootStack.js';
import { setToken } from './features/user/userSlice.js';
import {checkToken} from './features/user/User.js'

export default function App() {
  [appReady, setAppReady] = React.useState(false);
  //[token, setToken] = React.useState(null);
  //[refreshToken, setRefreshToken] = React.useState('');
  //const dispatch = useDispatch();

  if (!appReady) {
    return (
      <AppLoading
        startAsync={()=>checkToken}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />);
    }
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
  
}

