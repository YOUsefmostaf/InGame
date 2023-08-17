import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../../../../../assets/images';

const TwoShirts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={[styles.linear]}>
          <LinearGradient
            colors={['#493583', '#231449']}
            style={styles.gradient}>
            <Text style={styles.text}>20 pts</Text>
          </LinearGradient>
        </View>

        <View style={styles.images}>
          <Image source={images.redShirt} style={styles.firstImage} />
          <Image source={images.shield} style={styles.secondImage} />
        </View>
        <Text style={styles.textName}>Arsinal</Text>
      </View>

      <View style={[styles.innerContainer, {marginTop: 20}]}>
        <View style={[styles.linear]}>
          <LinearGradient
            colors={['#493583', '#231449']}
            style={styles.gradient}>
            <Text style={styles.text}>20 pts</Text>
          </LinearGradient>
        </View>

        <View style={styles.images}>
          <View style={styles.imageOuterContainer}>
            <View style={styles.imageContainer}>
              <Text style={styles.equalText}>=</Text>
            </View>
          </View>
          <Image source={images.shield} style={styles.secondImage} />
        </View>
        <Text style={styles.textName}>Draw</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={[styles.linear]}>
          <LinearGradient
            colors={['#493583', '#231449']}
            style={styles.gradient}>
            <Text style={styles.text}>20 pts</Text>
          </LinearGradient>
        </View>

        <View style={styles.images}>
          <Image source={images.redShirt} style={styles.firstImage} />
          <Image source={images.shield} style={styles.secondImage} />
        </View>
        <Text style={styles.textName}>Chelsea</Text>
      </View>
    </View>
  );
};

export default TwoShirts;
