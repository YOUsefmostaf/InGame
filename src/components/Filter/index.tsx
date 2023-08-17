import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const data = {
  tourneyType: ['Paid', 'Free', 'Sponsor', 'From Users'],
  tourney: [
    'InGame Tourney',
    'World Cup 2022',
    'Khalied Friends',
    'Coca Cola Competition',
  ],
  league: ['World Cup 2022', 'Cluib Friendlies'],
};
const Filter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.filterText}>Filter</Text>
      <Text style={styles.text}>Tourney Type</Text>
      <View style={styles.innerContainer}>
        {data.tourneyType.map((val, index) => (
          <View style={[styles.linear]} key={index}>
            <LinearGradient
              colors={['#493583', '#231449']}
              style={styles.gradient}>
              <Text style={styles.text2}>{val}</Text>
            </LinearGradient>
          </View>
        ))}
      </View>
      <Text style={styles.text}>Tourney </Text>
      <View style={styles.innerContainer}>
        {data.tourney.map((val, index) => (
          <View style={[styles.linear]} key={index}>
            <LinearGradient
              colors={['#493583', '#231449']}
              style={styles.gradient}>
              <Text style={styles.text2}>{val}</Text>
            </LinearGradient>
          </View>
        ))}
      </View>
      <Text style={styles.text}>League</Text>
      <View style={styles.innerContainer}>
        {data.league.map((val, index) => (
          <View style={[styles.linear]} key={index}>
            <LinearGradient
              colors={['#493583', '#231449']}
              style={styles.gradient}>
              <Text style={styles.text2}>{val}</Text>
            </LinearGradient>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Filter;
