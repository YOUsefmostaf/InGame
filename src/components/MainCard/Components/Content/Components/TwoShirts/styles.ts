import {StyleSheet} from 'react-native';
import {h, w} from '../../../../../../values/Dimensions';
import COLORS from '../../../../../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  linear: {
    borderRadius: 100,
    paddingTop: 5,
    paddingBottom: 1.5,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    backgroundColor: '#6e5f9b',
    marginBottom: 20,
    width: w * 0.2,
  },
  gradient: {
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
  images: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstImage: {
    // marginLeft: -w * 0.01,
    marginBottom: -h * 0.09,
    zIndex: 10,
  },
  secondImage: {
    marginLeft: -w * 0.09,
  },
  textName: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -h * 0.08,
  },
  imageOuterContainer: {
    backgroundColor: '#493583',
    borderRadius: 100,
    paddingTop: 3,
    paddingHorizontal: 0.8,
    paddingBottom: 1,
    width: w * 0.2,
    height: w * 0.2,
    marginBottom:-h*0.1,
    zIndex: 10,
  },
  imageContainer: {
    backgroundColor: '#231449',
    borderRadius: 100,
    width: w * 0.2,
    height: w * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  equalText: {
    color: COLORS.white,
    fontSize: 50,
  },
});
