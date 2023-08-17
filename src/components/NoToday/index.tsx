import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import { styles } from './styles';

const NoToday = () => {
  return (
    <View style={styles.container}>
      <Image source={images.search} />
      <Text style={styles.text1}>No Matches Today</Text>
      <Text style={styles.text2}>View Tomorrow matches to check what will be going next</Text>
    </View>
  );
};

export default NoToday;
