/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { globalStyles, primaryColor, primaryTextDark } from '../../theme/theme';

const fontColor = primaryTextDark;
const bottomBarBackgroundColor = primaryColor;
const focusedBottomBarBackgroundColor = '#20538b';
// const bottomBarBorderRadius = 8;

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
          const TabIcon = (size: { size: number }) => {
            let icon = null;
            switch (label) {
              case 'Home':
                // icon = (
                //   <MaterialIcons
                //     name="military-tech"
                //     size={size.size}
                //     color={iconColor}
                //   />
                // );
                break;
              case 'Savings':
                // icon = (
                //   <MaterialIcons
                //     name="stacked-bar-chart"
                //     size={size.size}
                //     color={iconColor}
                //   />
                // );
                break;
              case 'Paylater':
                // icon = (
                //   <FontAwesome
                //     name="space-shuttle"
                //     size={size.size}
                //     color={iconColor}
                //   />
                // );
                break;
              // case 'Challenges':
              //   icon = (
              //     <FontAwesome5
              //       name="dice-two"
              //       size={size.size}
              //       color={iconColor}
              //       light
              //     />
              //   );
              //   break;
              // case 'Hall of Fame':
              //   icon = (
              //     <MaterialIcons
              //       name="star"
              //       size={size.size}
              //       color={iconColor}
              //     />
              //   );
              //   break;
              // case 'Search':
              //   icon = (
              //     <MaterialIcons
              //       name="search"
              //       size={size.size}
              //       color={iconColor}
              //     />
              //   );
              //   break;
              // case 'Profile':
              //   icon = (
              //     <AntDesign
              //       name="user"
              //       size={size.size}
              //       color={iconColor}
              //     />
              //   );
              //   break;
            }
            return icon;
          };
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
                style={[
                  //customBottomTabBarStyle.fullFlex,
                  {
                    // backgroundColor: 'yellow',
                    // width: '100%',
                    // paddingHorizontal: 0,
                    //backgroundColor: focusedBottomBarBackgroundColor,
                  },
                ]}>
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
                  <TabIcon size={iconSize} />
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
