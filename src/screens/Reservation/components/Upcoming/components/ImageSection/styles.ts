import {StyleSheet} from 'react-native';
import {
  BorderRadius,
  MarginsAndPaddings,
  h,
} from '../../../../../../values/Dimensions';
import COLORS from '../../../../../../values/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: h * 0.14,
    borderRadius: BorderRadius.l,
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: COLORS.white,
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    width: 15,
    height: 15,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: COLORS.white,
    paddingHorizontal: MarginsAndPaddings.xl,
    borderRadius: 100,
    paddingVertical: MarginsAndPaddings.xxs,
    textAlign:'center'
  },
  text: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '500',
  },
});
