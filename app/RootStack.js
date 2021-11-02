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
import OrgHomeScreen from '../screens/org/OrgHomeScreen';

import OrgTabs from '../components/molecules/OrgTabs';
import TestScreen from '../screens/org/TestScreen';

// selecetors and hooks
import { useSelector } from 'react-redux';
import { selectToken, selectRefreshToken } from '../features/user/userSlice';

const Stack = createStackNavigator();
const RootStack = () => {
    const token = useSelector(selectToken)
    const refreshToken = useSelector(selectRefreshToken)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerTitle:'',
                    headerTransparent: true
                }}
            >
                { token ?
                    (<Stack.Group>
                        <Stack.Screen name="OrgTabs" component={OrgTabs} />
                        <Stack.Screen name="Welcome" component={Welcome} />
                        <Stack.Screen name="TestScreen" component={TestScreen} />

                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="UserSignIn" component={UserSignIn} />
                        <Stack.Screen name="StaffSignIn" component={StaffSignIn} />
                        <Stack.Screen name="StaffSignUp" component={StaffSignUp} />
                        <Stack.Screen name="OrgSignIn" component={OrgSignIn} />
                        <Stack.Screen name="OrgSignUp" component={OrgSignUp} />

                    </Stack.Group>
                    )

                    :
                    
                    // auth screens
                    (<Stack.Group>
                        <Stack.Screen name="Welcome" component={Welcome} />
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="UserSignIn" component={UserSignIn} />
                        <Stack.Screen name="StaffSignIn" component={StaffSignIn} />
                        <Stack.Screen name="StaffSignUp" component={StaffSignUp} />
                        <Stack.Screen name="OrgSignIn" component={OrgSignIn} />
                        <Stack.Screen name="OrgSignUp" component={OrgSignUp} />
                        <Stack.Screen name="OrgTabs" component={OrgTabs} />
                    </Stack.Group>
                    )
                }
                
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default RootStack;

/*
orgHomeTba component
OrgNavStack => <OrgHomeScreen />

[{name: Mbami, order_id, ...}, .., ....,]
filter by progress.
*/
