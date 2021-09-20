import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//screens
<<<<<<< HEAD
import RootStack from './app/RootStack.js';

export default function App() {
  return <RootStack />
  
}

=======
import Welcome from './screens/Welcome';
import UserSignIn from './screens/UserSignIn';
import SignIn from './screens/SignIn.js';
import StaffSignIn from './screens/StaffSignIn.js';
import OrgSignIn from './screens/OrgSignIn.js';
import OrgSignUp from './screens/OrgSignUp.js';

export default function App() {
  return (
    <OrgSignUp />
  );
}
>>>>>>> bradley
