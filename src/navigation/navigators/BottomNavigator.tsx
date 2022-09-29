/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationKeys, RouteParamMap } from '../NavigationKeys';
import CustomBottomTabBar from '../bars/CustomBottomTabBar';
import HomePage from '../../screens/HomePage';
import Search from '../../screens/Search';

const BottomNavigator = createBottomTabNavigator<RouteParamMap>();

class BottomNavigation extends Component<
  {
    user: AuthState;
  },
  any
> {
  render() {
    return (
      <BottomNavigator.Navigator
        initialRouteName={NavigationKeys.HomePage}
        tabBar={(bottomTabBarProps) => (
          <CustomBottomTabBar
            {...bottomTabBarProps}
            barStyle={{
              marginBottom: 20,
              marginHorizontal: 20,
              backgroundColor: 'transparent',
              shadowColor: 'black',
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 10,
            }}
          />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >

        <BottomNavigator.Screen
          options={{
            title: 'Home',
          }}
          name={NavigationKeys.HomePage}
          component={HomePage}
        />


        <BottomNavigator.Screen
          options={{
            title: 'Search',
          }}
          name={NavigationKeys.Search}
          component={Search}
        />

      </BottomNavigator.Navigator>
    );
  }
}

export default BottomNavigation;
