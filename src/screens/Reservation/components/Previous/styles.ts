import {StyleSheet} from 'react-native';
import COLORS from '../../../../values/colors';
import {BorderRadius, MarginsAndPaddings} from '../../../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.white,
    marginHorizontal: MarginsAndPaddings.xxl,
    borderRadius: BorderRadius.l,
    flex:1
  },
  noData: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.blue,
  },
});
