import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {images} from '../../assets/images';

const Corners = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#342264', '#2F1E5D']} style={styles.gradient}>
        <View style={[styles.linear]}>
          <LinearGradient
            colors={['#493583', '#231449']}
            style={styles.innergradient}>
            <Text style={styles.text}>20 pts</Text>
          </LinearGradient>
        </View>
        <View style={styles.images}>
          <Image source={images.rigthFlag} style={styles.firstImage} />
          <Image source={images.shield} style={styles.secondImage} />
        </View>
        <Text style={styles.bottomText}>Over 10</Text>
      </LinearGradient>
      <LinearGradient colors={['#342264', '#2F1E5D']} style={styles.gradient}>
        <View style={[styles.linear]}>
          <LinearGradient
            colors={['#493583', '#231449']}
            style={styles.innergradient}>
            <Text style={styles.text}>20 pts</Text>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Corners;
