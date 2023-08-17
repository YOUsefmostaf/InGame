import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';
import {MarginsAndPaddings} from '../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
  upcoming: {
    backgroundColor: COLORS.white,
    padding: MarginsAndPaddings.xxl,
    marginVertical: MarginsAndPaddings.xl,
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '500',
  },
});
