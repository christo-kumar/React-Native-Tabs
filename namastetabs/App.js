/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { ImageHello } from './components/ImageHello';
import { ListHello } from './components/ListHello';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'stepforward';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            } else if (route.name === 'List') {
              iconName = 'stepbackward';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            }
            return (
              <IconAntDesign
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}
        tabBarOptions={{
          activeTintColor: '#f0f',
          showLabel: false,
        }}
      >
        <Tab.Screen
          name='Home'
          component={ImageHello}
        />
        <Tab.Screen
          name='List'
          component={ListHello}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D17FD6',
  },
});

export default App;