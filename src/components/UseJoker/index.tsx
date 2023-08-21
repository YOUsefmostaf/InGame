import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import CardMyJokers from './Components/CardMyJokers';
import CardMoreJokers from './Components/CardMoreJokers';
import NoJokers from './Components/NoJokers';

const UseJoker = () => {
  return (
    <LinearGradient colors={['#1C0D49', '#1D1641']} style={styles.container}>
      <Text style={styles.text}>Use Joker</Text>
      <Text style={styles.text2}>My Jokers</Text>
      {/* <View style={styles.myJokersContainer}>
        <CardMyJokers />
        <CardMyJokers />
      </View> */}
      <NoJokers/>
      <Text style={styles.text2}>Get More Jokers</Text>
      <View style={styles.myJokersContainer}>
        <CardMoreJokers />
        <CardMoreJokers />
      </View>
    </LinearGradient>
  );
};

export default UseJoker;
