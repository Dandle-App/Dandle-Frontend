import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

//screens
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import UserSignIn from '../screens/UserSignIn.js';

const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTitle:'',
                headerTransparent: true
            }}
            initialRouteName="Welcome"
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="UserSignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default RootStack;