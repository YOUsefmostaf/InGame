import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {images} from '../../../../assets/images';

const CardMyJokers = () => {
  return (
    <LinearGradient colors={['blue', 'red']} style={styles.container}>
      <Text style={styles.badge}>2</Text>
      <View style={styles.images}>
        <Image source={images.card} />
        <View style={styles.containerImage}>
          <Image source={images.card2} />
          <Image source={images.star} style={styles.star} />
        </View>
      </View>
      <Text style={styles.text}>Exact Score</Text>
    </LinearGradient>
  );
};

export default CardMyJokers;
