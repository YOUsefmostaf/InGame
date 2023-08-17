import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Top from './Components/Top';
import Content from './Components/Content';

const MainCard = () => {
  return (
    <LinearGradient
      colors={['red', 'blue']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <LinearGradient
        colors={['#1C0D49', '#1D1641']}
        style={styles.innerContainer}>
        <Top />
        <Content />
      </LinearGradient>
    </LinearGradient>
  );
};

export default MainCard;
