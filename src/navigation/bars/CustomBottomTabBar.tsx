/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { globalStyles, primaryColor, primaryTextDark } from '../../theme/theme';

const fontColor = primaryTextDark;
const bottomBarBackgroundColor = primaryColor;
const focusedBottomBarBackgroundColor = '#20538b';

export default class CustomBottomTabBar extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let { state, descriptors, navigation } = this.props;
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
      <View style={customBottomTabBarStyle.bottomTabBarContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
          const iconColor = isFocused ? fontColor : '#bfbfbf';
          
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconSize: number = 24;

          //if (isFocused) {
          return (
            <View
              key={route.key}
              style={[customBottomTabBarStyle.tabContainer, {
                flex: 1, paddingVertical: 12,
              }]}>
              <TouchableOpacity
                accessibilityRole="button"
                // accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                >
                <View
                  style={[
                    //customBottomTabBarStyle.tabIconContainer,
                    {
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 0,
                      marginHorizontal: 0,
                    },
                  ]}>
                    
                  <Text
                    style={[
                      "#cdcdcd",
                      { color: iconColor, marginStart: 4, fontFamily: 'Montserrat-Regular' },
                    ]}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const customBottomTabBarStyle: {
  bottomTabBarContainer: any;
  fullFlex: any;
  tabContainer: any;
  tabIconContainer: any;
} = StyleSheet.create({
  bottomTabBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    backgroundColor: 'white',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14, //borderTopColor: 'gray', borderTopWidth: 1,
    // borderRadius: bottomBarBorderRadius,
    bottom: 0,
    zIndex: 1,
    position: 'absolute',
    // width: '100%',
  },
  fullFlex: { flex: 1 },
  tabContainer: {
    flex: 1,
    paddingVertical: 0,
    //borderRadius: 0, //bottomBarBorderRadius,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  tabIconContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: '100%',
    width: '50%',
    alignSelf: 'center',
    marginVertical: 4,
    paddingVertical: 8,
    borderRadius: 0, // bottomBarBorderRadius,
  },
});
