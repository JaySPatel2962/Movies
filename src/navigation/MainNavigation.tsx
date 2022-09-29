/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './navigators/BottomNavigator';
import { NavigationKeys, RouteParamMap } from './NavigationKeys';
import HomePage from '../screens/HomePage';
import DetailedScreen from '../screens/DetailedScreen';
import Search from '../screens/Search';
import { Text } from 'react-native';


const MainNavigator = createStackNavigator<RouteParamMap>();

class MainNavigation extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      urlsUpdated: true,
      isLoggedIn: false
    };
  }

  render() {

    return (
      <NavigationContainer fallback={<Text></Text>}>
        <MainNavigator.Navigator
          initialRouteName={HomePage}

          screenOptions={{
            headerShown: false,
            // ...TransitionPresets.SlideFromRightIOS,
          }}
        >

          <MainNavigator.Screen
            name={NavigationKeys.HomePage}
            component={BottomNavigation}
          />



          <MainNavigator.Screen
            name={NavigationKeys.DetailedScreen}
            component={DetailedScreen}
          />

          <MainNavigator.Screen
            name={NavigationKeys.Search}
            component={Search}
          />

        </MainNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainNavigation;
