import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {images} from '../../assets/images';

const Selection = () => {
  return (
    <LinearGradient colors={['#342264', '#2F1E5D']} style={styles.container}>
      <Image source={images.redShirt} />
      <Text style={styles.title}>Arsenal</Text>
      <View style={[styles.linear]}>
        <LinearGradient
          colors={['#493583', '#231449']}
          style={styles.innergradient}>
          <Text style={styles.text}>20 pts</Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default Selection;
