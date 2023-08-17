import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import {styles} from './styles';
import {LinearTextGradient} from 'react-native-text-gradient';

const Light = () => {
  return (
    <View style={styles.container}>
      <Image source={images.ligth} />
      <LinearTextGradient
        style={{fontWeight: 'bold', fontSize: 72}}
        locations={[0, 1]}
        colors={['#FFF4D9', '#FFC63A']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={styles.text1}>Ready, Steady, Boost!</Text>
      </LinearTextGradient>

      <Text style={styles.text2}>
        You Will Get 2x Points For This Match.Wish You Good Luck!
      </Text>
    </View>
  );
};

export default Light;
