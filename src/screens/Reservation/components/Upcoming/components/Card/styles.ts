import {StyleSheet} from 'react-native';
import COLORS from '../../../../../../values/colors';
import {
  BorderRadius,
  MarginsAndPaddings,
  h,
  w,
} from '../../../../../../values/Dimensions';

export const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: MarginsAndPaddings.l,
    // marginTop: 5,
  },
  left: {
    flex: 1,
  },
  rigth: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: h * 0.01,
  },
  title: {
    fontSize: w * 0.037,
    color: COLORS.blue,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: w * 0.025,
    color: COLORS.blue,
  },
  images: {
    width: 12,
    height: 12,
  },
  cancel: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 10,
    borderColor: COLORS.red,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: BorderRadius.s,
  },
  textCancel: {
    color: COLORS.red,
    fontSize: 12,
  },
});
