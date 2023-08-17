import {StyleSheet} from 'react-native';
import {h, w} from '../../values/Dimensions';
import COLORS from '../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap:15,
    marginBottom: h * 0.2,
  },
  text1: {
      color:COLORS.white,
      fontSize:35,
      fontWeight:'bold',
  },
  text2: {
      color:'grey',
      fontSize:20,
      textAlign:'center',
  }
});
