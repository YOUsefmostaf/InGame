import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import { styles } from './styles';

const NoJokers = () => {
  return (
    <View style={styles.container}>
      <Image source={images.cards} />
      <Text style={styles.noJokers}>No Jokers</Text>
      <Text style={styles.text}>
        You have no jokers. you can get one by purchasing any pack bellow
      </Text>
    </View>
  );
};

export default NoJokers;
