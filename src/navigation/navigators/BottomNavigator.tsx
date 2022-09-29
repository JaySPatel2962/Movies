/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../screens/HomeScreen';
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
    // console.log(this.props.user.user.type);
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
          // ...TransitionPresets.SlideFromRightIOS,
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
            // tabBarVisible: false,
          }}
          name={NavigationKeys.Savings}
          // component={Savings}
          component={Search}
        />


        {/* <BottomNavigator.Screen
          options={{
            title: 'Paylater',
          }}
          name={NavigationKeys.PayLater}
          component={PayLater}
        /> */}


        {/* <BottomNavigator.Screen
          options={{
            title: 'Challenges',
            // tabBarVisible: false,
          }}
          name={NavigationKeys.HomePage}
          component={HomePage}
        /> */}
      </BottomNavigator.Navigator>
    );
  }
}

export default BottomNavigation;
