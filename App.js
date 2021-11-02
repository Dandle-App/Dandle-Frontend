import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import { Provider, useDispatch } from 'react-redux';
import { store } from './app/store';

// screens
import RootStack from './app/RootStack.js';
import { setToken } from './features/user/userSlice.js';
import OrgHomeScreen from './screens/org/OrgHomeScreen';
import OrgTabs from './components/molecules/OrgTabs';

// storage
import * as SecureStore from 'expo-secure-store';


// main app
export default function App() {
  const [appReady, setAppReady] = useState(false);
  
  // check if user is logged in by checking if there is a token in storage
  try {
    useEffect(() => {
      SecureStore.getItemAsync('token').then(token => {
        if (token) {
          store.dispatch(setToken(token));
        }
        setAppReady(true);
      });
    }, [appReady]);
  } 
  catch (error) {
    console.log(error);
  }

 if (!appReady) {
    return <AppLoading /> 
 } 

  return (
    <Provider store={store}><RootStack /></Provider>
    );
  
}

/*
const checkToken = async () => {
  const dispatch = useDispatch();
  console.log('\x1b[33m checking for token');
  try {
    useEffect(() => {
      SecureStore.getItemAsync('token').then(token => {
        if (token) {
          dispatch(setToken(token));
        }
        setAppReady(true);
      });
    }, [appReady]);
  } 
  catch (error) {
    console.log('\x1b[31m error getting token');
  }
  */