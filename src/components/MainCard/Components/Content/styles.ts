import {StyleSheet} from 'react-native';
import COLORS from '../../../../values/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text1: {
    color: 'grey',
    textAlign: 'center',
    fontSize:15,
  },
  text2:{
    color:COLORS.white,
    textAlign: 'center',
    fontSize:25,
    fontWeight:'bold',
    marginTop:10
  }
});
