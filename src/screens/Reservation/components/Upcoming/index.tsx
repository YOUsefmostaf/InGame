import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ImageSection from './components/ImageSection';
import COLORS from '../../../../values/colors';
import {h} from '../../../../values/Dimensions';
import Card from './components/Card';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <ImageSection />
        </View>
        <Card />
      </View>
    </View>
  );
};

export default Upcoming;
