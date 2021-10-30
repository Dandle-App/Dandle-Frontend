import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Octicons} from '@expo/vector-icons';

//screens
import OrgSettings from '../../screens/org/OrgSettings';
import OrgHomeScreen from '../../screens/org/OrgHomeScreen';
import OrgAnalytics from '../../screens/org/OrgAnalytics';
import OrgChat from '../../screens/org/OrgChat';


const Tab = createBottomTabNavigator();

export default function OrgTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute', 
            backgroundColor: '#f38484', 
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,},
            tabBarActiveTintColor: '#f38484'
          }
        }
      >
        <Tab.Screen 
          name="Settings" 
          component={OrgSettings}
          options={{
            tabBarIcon: () => {
              return(
                <Octicons name='gear' size={30}/>
              )
            }
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={OrgHomeScreen}
          options={{
            tabBarIcon: () => {
              return(
                <Octicons name='home' size={30}/>
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
                <Octicons name='comment-discussion' size={30}/>
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
                <Octicons name='graph' size={30}/>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}