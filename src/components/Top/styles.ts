import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';
import {h, w} from '../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: w * 0.03,
  },
  text: {
    color: COLORS.white,
    fontSize: w * 0.08,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: h * 0.01,
    position: 'relative',
    width: w * 0.13,
  },
  numberText: {
    color: COLORS.white,
    fontSize: w * 0.04,
    marginLeft:w*.03
  },
  image: {
    position: 'absolute',
    left: -10,
  },
});
