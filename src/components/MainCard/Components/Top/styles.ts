import {StyleSheet} from 'react-native';
import COLORS from '../../../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 15,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    borderRadius: 100,
  },
  imageOuterContainer:{
    backgroundColor: '#493583',
    borderRadius: 100,
    paddingTop:3,
    paddingHorizontal:.8,
    paddingBottom:1,
  },
  imageContainer: {
    backgroundColor: '#231449',
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
