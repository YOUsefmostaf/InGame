import {StyleSheet} from 'react-native';
import {MarginsAndPaddings, w} from '../../values/Dimensions';
import COLORS from '../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: MarginsAndPaddings.xl,
  },
  filterText: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: MarginsAndPaddings.xl,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text2: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  linear: {
    borderRadius: 100,
    paddingTop: 4,
    paddingBottom: 1.5,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    backgroundColor: '#6e5f9b',
    marginBottom: 20,
  },
  gradient: {
    borderRadius: 100,
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
