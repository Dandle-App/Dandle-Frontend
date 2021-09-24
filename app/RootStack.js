import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';

import UserSignIn from '../screens/UserSignIn.js';

import StaffSignIn from '../screens/StaffSignIn';
import StaffSignUp from '../screens/StaffSignUp';

import OrgSignIn from '../screens/OrgSignIn';
import OrgSignUp from '../screens/OrgSignUp';

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
                <Stack.Screen name="UserSignIn" component={UserSignIn} />
                <Stack.Screen name="OrgSignUp" component={OrgSignUp} />
                <Stack.Screen name="OrgSignIn" component={OrgSignIn} />
                <Stack.Screen name="StaffSignUp" component={StaffSignUp} />
                <Stack.Screen name="StaffSignIn" component={StaffSignIn} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default RootStack;