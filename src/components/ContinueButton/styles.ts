import {StyleSheet} from 'react-native';
import {MarginsAndPaddings} from '../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: MarginsAndPaddings.xl,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    right: 15,
  },
});
