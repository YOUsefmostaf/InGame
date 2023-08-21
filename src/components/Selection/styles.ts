import {StyleSheet} from 'react-native';
import {w} from '../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innergradient: {
    borderRadius: 100,
  },
  linear: {
    borderRadius: 100,
    paddingTop: 5,
    paddingBottom: 1.5,
    paddingLeft: 1.5,
    paddingRight: 1.5,
    backgroundColor: '#6e5f9b',
    width: w * 0.2,
  },
  text: {
    fontSize: 15,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
  title:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
