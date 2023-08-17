import {StyleSheet} from 'react-native';
import COLORS from '../../../../values/colors';
import {
  BorderRadius,
  MarginsAndPaddings,
  w,
} from '../../../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: MarginsAndPaddings.xxl,
    borderRadius: BorderRadius.l,
  },
 
});
