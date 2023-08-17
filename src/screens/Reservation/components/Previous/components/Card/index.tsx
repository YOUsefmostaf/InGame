import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import COLORS from '../../../../../../values/colors';


const Card = ({
  name,
  userName,
  phone,
}: {
  name: string;
  userName: string;
  phone: string;
}) => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.left}>
        <View style={styles.flexRow}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {userName}
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Image
            source={require('../../../../../../assets/images/location.png')}
            style={{width: 12, height: 12}}
          />
          <Text style={styles.subTitle} numberOfLines={1}>
            Mode Al Faisaliah - Riaydh
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Image
            source={require('../../../../../../assets/images/profile2.png')}
            style={styles.images}
          />
          <Text style={styles.subTitle} numberOfLines={1}>
            Reservation For 3 People
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Image
            source={require('../../../../../../assets/images/phone.png')}
            style={styles.images}
          />
          <Text style={styles.subTitle} numberOfLines={1}>
            {phone}
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Image
            source={require('../../../../../../assets/images/calendar.png')}
            style={styles.images}
          />
          <Text
            style={[styles.subTitle, {color: COLORS.orange}]}
            numberOfLines={1}>
            Wed,Aug 28 , 9.11 Pm
          </Text>
        </View>
      </View>
      <View style={styles.rigth}>
        <View style={styles.cancel}>
          <Text
            style={styles.textCancel}
            onPress={() => console.log('pressed')}>
            Re-Reserve
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
