import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import {styles} from './styles';

const NoYesterday = () => {
  return (
    <View style={styles.container}>
      <Image source={images.search} />
      <Text style={styles.text1}>No Matches </Text>
      <Text style={styles.text2}>
        View Today's matches and make your prediction
      </Text>
    </View>
  );
};

export default NoYesterday;
