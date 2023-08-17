import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import {styles} from './styles';

const Top = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>InGame tourney</Text>
        <Text style={styles.text}>Pepsi Fest</Text>
      </View>
      <View>
        <View style={styles.imageOuterContainer}>
          <View style={styles.imageContainer}>
            <Image source={images.mark} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Top;
