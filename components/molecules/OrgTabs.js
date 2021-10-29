import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import OrgSettings from '../../screens/org/OrgSettings';
import OrgHomeScreen from '../../screens/org/OrgHomeScreen';
import OrgAnalytics from '../../screens/org/OrgAnalytics';
import OrgChat from '../../screens/org/OrgChat'; 

//icons
const SETTINGS = require('../../assets/settings.png');
const HOME = require('../../assets/home.png');
const CHAT = require('../../assets/chat.png');
const ANALYTICS = require('../../assets/analytics.png');

const Tab = createBottomTabNavigator();

export default function OrgTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute', 
            backgroundColor: '#630101', 
            borderRadius: 100}}
        }
      >
        <Tab.Screen 
          name="Settings" 
          component={OrgSettings}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return(
                <Image 
                  style={{width: size, height: size}}
                  source={SETTINGS}
                />
              )
            }
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={OrgHomeScreen}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return(
                <Image 
                  style={{width: size, height: size}}
                  source={HOME}
                />
              )
            }
          }} 
        />
        <Tab.Screen 
          name="Chat" 
          component={OrgChat} 
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return(
                <Image 
                  style={{width: size, height: size}}
                  source={CHAT}
                />
              )
            }
          }}
        />
        <Tab.Screen 
          name="Analytics" 
          component={OrgAnalytics} 
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return(
                <Image 
                  style={{width: size, height: size}}
                  source={ANALYTICS}
                />
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}