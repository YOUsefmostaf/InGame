/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BottomTabs from './src/navigation/BottomTabs';
import COLORS from './src/values/colors';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.darkBlue}  barStyle="light-content"/>

      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
