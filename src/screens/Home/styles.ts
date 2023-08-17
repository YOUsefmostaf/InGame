import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBorder: {
    borderWidth: 5,
    borderRadius: 10,
  },
  content: {
    padding: 10,
    backgroundColor: '#FFFFFF', // Set the background color to match the gradient colors
    borderRadius: 8,
  },
});
