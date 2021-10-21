import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import { Provider, useDispatch } from 'react-redux';
import { store } from './app/store';

//screens
import RootStack from './app/RootStack.js';
import { setToken } from './features/user/userSlice.js';

//storage
import * as SecureStore from 'expo-secure-store';

const checkToken = () => {
  let token = useSelector(selectToken);
  const dispatch = useDispatch();
  console.log('checking for token');
  SecureStore.getItemAsync('token')
  .then(result => {
      if (result) {
          dispatch(setToken(token));
          console.log("Token: " + result);
          resolve(result);
      } else {
          dispatch(setToken(token));
          //reject("No credentials found");
          console.log("No credentials found");
      }
      setAppReady(true);
  })
  .catch(err => {
      console.log(err);
      setAppReady(true);
      reject(err);
  });
  
}

export default function App() {
  [appReady, setAppReady] = React.useState(false);

  // function that will check for a token and refresh token from react-native-keychain
  

  if (appReady) {
    return (
      <AppLoading
        startAsync={checkToken}
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

