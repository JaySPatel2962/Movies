/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/navigation/MainNavigation';
import { StyleProvider, NativeBaseProvider } from 'native-base';
import { primaryColor } from './src/theme/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: primaryColor,
        }}>
        <StatusBar
          backgroundColor={primaryColor}
          barStyle={'light-content'}
          hidden={false}
          translucent={true}
        />
        <MainNavigation />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
