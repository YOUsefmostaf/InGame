import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <LinearGradient
      start={{x: 0.3, y: 0.1}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={['#4c669f', '#3b5998', '#192f6a']}>
      <Text>Sign in with Facebook</Text>
    </LinearGradient>
  );
};

export default Home;
