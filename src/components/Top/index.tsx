import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from '../../assets/images';

const data = [
  {
    number: 2,
    icon: images.joker,
    color: '#72E5DF',
  },
  {
    number: 55,
    icon: images.joker,
    color: '#64BEFF',
  },
  {
    number: '5k',
    icon: images.joker,
    color: '#ffc93e',
  },
];
const Top = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>PLAY</Text>
      </View>
      <View style={styles.iconContainer}>
        {data.map((val, index) => (
          <View key={index} style={[styles.icon, {backgroundColor: val.color}]}>
            <Text style={styles.numberText}>{val.number}</Text>
            <Image source={val.icon} style={styles.image} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Top;
