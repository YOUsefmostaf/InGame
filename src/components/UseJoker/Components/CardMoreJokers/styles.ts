import {StyleSheet} from 'react-native';
import {h, w} from '../../../../values/Dimensions';
import COLORS from '../../../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // overflow:'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    objectFit: 'contain',
    width: w * 0.565,
    marginLeft: -w * 0.11,
    height: h * 0.7,
    marginTop: -h * 0.2,
  },
  images: {
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    // height:"36%"
  },
  pack: {
    width: w * 0.3,
    objectFit: 'contain',
    // marginTop: -h * 0.1,
  },
  crown: {
    objectFit: 'contain',
    marginTop: -h * 0.12,
    width: w * 0.3,
  },
  text: {
    position: 'absolute',
    top: h * 0.16,
    color: 'white',
    fontWeight: 'bold',
    zIndex: 10,
  },
  bottomContainer: {
    position: 'absolute',
    top: h * 0.2,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  text2: {
    color: COLORS.white,
  },
});
