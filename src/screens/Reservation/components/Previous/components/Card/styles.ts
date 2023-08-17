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
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: MarginsAndPaddings.l,
    backgroundColor:COLORS.white,
    borderRadius: BorderRadius.l,
    marginBottom:10
  },
  left: {
    flex: 2,
  },
  rigth: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: h*.01,
  },
  title: {
    fontSize: w * 0.037,
    color: COLORS.blue,
    fontWeight: '500',
    maxWidth: w * 0.8,
  },
  subTitle: {
    fontSize: w * 0.025,
    color: COLORS.blue,
    maxWidth: w * 0.7,
  },
  images: {
    width: 12,
    height: 12,
  },
  cancel: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 10,
    borderColor: COLORS.blue,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius: BorderRadius.s,
    backgroundColor: COLORS.blue,
  },
  textCancel: {
    color: COLORS.white,
    fontSize: 12,
  },
});
