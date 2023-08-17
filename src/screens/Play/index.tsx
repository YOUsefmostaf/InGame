import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../values/colors';
import Top from '../../components/Top';
import {MarginsAndPaddings} from '../../values/Dimensions';
import {styles} from './styles';
import Tab from '../../components/Tab';
import Timer from '../../components/Timer';
import NoToday from '../../components/NoToday';
import MainCard from '../../components/MainCard';
import Filter from '../../components/Filter';

const Play = () => {
  return (
    <LinearGradient
      colors={[COLORS.darkBlue, COLORS.black]}
      style={styles.container}>
      {/* <Top /> */}
      {/* <Tab /> */}
      {/* <Timer/> */}
      {/* <NoToday/> */}
      {/* <MainCard/> */}
      {/* <Filter /> */}
    </LinearGradient>
  );
};

export default Play;
