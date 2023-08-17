import {View, Text, Image} from 'react-native';
import React from 'react';
import CountDown from 'react-native-countdown-component';
import COLORS from '../../values/colors';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {images} from '../../assets/images';
const Timer = () => {
  return (
    <LinearGradient colors={['#332362', '#201149']} style={styles.container}>
      <View style={styles.timerContainer}>
        <CountDown
          until={5000000}
          digitStyle={{backgroundColor: 'transparent'}}
          digitTxtStyle={{color: COLORS.white, fontSize: 20}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold', display: 'none'}}
          separatorStyle={{color: COLORS.white, marginHorizontal: -15}}
          timeToShow={['H', 'M', 'S']}
          showSeparator
        />
        <View>
          <Text style={styles.text}>Left Before</Text>
          <Text style={styles.text}>the first game</Text>
        </View>
      </View>
      <Image source={images.timer} style={styles.image} />
    </LinearGradient>
  );
};

export default Timer;
