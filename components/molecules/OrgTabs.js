import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import OrgSettings from '../../screens/org/OrgSettings';
import OrgHomeScreen from '../../screens/org/OrgHomeScreen';
import OrgAnalytics from '../../screens/org/OrgAnalytics';
import OrgChat from '../../screens/org/OrgChat';

const Tab = createBottomTabNavigator();

export default function OrgTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={OrgHomeScreen} />
        <Tab.Screen name="Chat" component={OrgChat} />
        <Tab.Screen name="Settings" component={OrgSettings} />
        <Tab.Screen name="Analytics" component={OrgAnalytics} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}