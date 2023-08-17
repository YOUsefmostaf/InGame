import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TwoShirts from './Components/TwoShirts';


const Content = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Club Friendlies</Text>
        <Text style={styles.text2}>5:00 PM</Text>
      </View>
      <TwoShirts />
    </View>
  );
};

export default Content;
