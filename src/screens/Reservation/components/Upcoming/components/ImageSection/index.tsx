import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ImageSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../../assets/images/Rectangle2.png')}
        style={styles.image}
      />
      <View style={styles.heartContainer}>
        <Image
          source={require('../../../../../../assets/images/heart.png')}
          style={styles.heart}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>10 Km</Text>
      </View>
    </View>
  );
};

export default ImageSection;
