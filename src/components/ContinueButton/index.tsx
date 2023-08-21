import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../assets/images';
import { styles } from './styles';

const ContinueButton = () => {
  return (
    <LinearGradient colors={['#AFDE00', '#6BAD00']} style={styles.container}>
      <Text style={styles.text}>Continue</Text>
      <Image source={images.arrowRigth} style={styles.image}/>
    </LinearGradient>
  );
};

export default ContinueButton;
