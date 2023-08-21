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
import Light from '../../components/Light';
import NoYesterday from '../../components/NoYesterday';
import UseJoker from '../../components/UseJoker';
import ContinueButton from '../../components/ContinueButton';
import Corners from '../../components/Corners';
import Selection from '../../components/Selection';

const Play = () => {
  return (
    <LinearGradient
      colors={[COLORS.white, COLORS.white]}
      style={styles.container}>
      {/* <Top /> */}
      {/* <Tab /> */}
      {/* <Timer/> */}
      {/* <NoToday/> */}
      {/* <MainCard/> */}
      {/* <Filter /> */}
      {/* <Light/> */}
      {/* <NoYesterday /> */}
      {/* <UseJoker/> */}
      {/* <ContinueButton/> */}
      {/* <Corners /> */}
      {/* <Selection/> */}
    </LinearGradient>
  );
};

export default Play;
