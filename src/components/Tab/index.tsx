import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../values/colors';
import {images} from '../../assets/images';
import {styles} from './styles';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View
          style={[
            styles.linear,
            {backgroundColor: activeTab === 0 ? COLORS.white : '#332362'},
          ]}>
          <TouchableOpacity
            onPress={() => handleTabPress(0)}
            style={[
              styles.touch,
              {backgroundColor: activeTab === 0 ? COLORS.white : '#1B0E40'},
            ]}>
            <Text
              style={[
                styles.text,
                {color: activeTab === 0 ? '#1B0E40' : COLORS.white},
              ]}>
              Yesterday
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.linear,
            {backgroundColor: activeTab === 1 ? COLORS.white : '#332362'},
          ]}>
          <TouchableOpacity
            onPress={() => handleTabPress(1)}
            style={[
              styles.touch,
              {backgroundColor: activeTab === 1 ? COLORS.white : '#1B0E40'},
            ]}>
            <Text
              style={[
                styles.text,
                {color: activeTab === 1 ? '#1B0E40' : COLORS.white},
              ]}>
              Today
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.linear,
            {backgroundColor: activeTab === 2 ? COLORS.white : '#332362'},
          ]}>
          <TouchableOpacity
            onPress={() => handleTabPress(2)}
            style={[
              styles.touch,
              {backgroundColor: activeTab === 2 ? COLORS.white : '#1B0E40'},
            ]}>
            <Text
              style={[
                styles.text,
                {color: activeTab === 2 ? '#1B0E40' : COLORS.white},
              ]}>
              Tomorrow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filter}>
        <View
          style={styles.iconContainer}>
          <Image source={images.joker} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default Tab;
