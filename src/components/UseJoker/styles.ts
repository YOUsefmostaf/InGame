import {StyleSheet} from 'react-native';
import {MarginsAndPaddings} from '../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    padding: MarginsAndPaddings.ml,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text2: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  myJokersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
