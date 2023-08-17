import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {h, w} from '../values/Dimensions';
import COLORS from '../values/colors';
import Home from '../screens/Home';
import Reservation from '../screens/Reservation';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import Play from '../screens/Play';
import { images } from '../assets/images';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.yellow,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          position: 'absolute',
          height: h * 0.098,
          backgroundColor: COLORS.darkBlue,
          borderWidth: 0,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 10,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Play'}
        component={Play}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={images.joker}
                style={{width: 20, height: 20, marginTop: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Reservation'}
        component={Reservation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={images.joker}
                style={{width: 20, height: 20, marginTop: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Favorite'}
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={images.joker}
                style={{width: 20, height: 20, marginTop: 10}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={images.joker}
                style={{width: 20, height: 20, marginTop: 10}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
