
// rnfe  Create a new component   s add a styles.

import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Move between screens
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    botton: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70
  }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={''}></Tab.Screen>
      <Tab.Screen name='Search' component={Search}></Tab.Screen>
      <Tab.Screen name='Profile' component={Profile}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation