import {StyleSheet} from 'react-native';
import {h, w} from '../../values/Dimensions';
import COLORS from '../../values/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: w,
    marginTop: h * 0.02,
  },
  tabContainer: {
    flexDirection: 'row',
    width: w * 0.8,
    gap: 2,
  },
  linear: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#332362',
    paddingTop: 3,
    paddingBottom: 2,
    paddingLeft: 1,
    paddingRight: 1,
    height:h*.065
  },
  touch: {
    backgroundColor: '#1B0E40',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height:'100%'
  },
  text: {
    fontSize: 15,
    paddingVertical: 10,
  },
  filter: {
    width: w * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    borderRadius: 100,
    padding: 10,
    backgroundColor: '#332362',
    justifyContent: 'center',
    alignItems  : 'center',
  },
  image:{
    backgroundColor: '#1B0E40',
    borderRadius: 100,
    padding: 10,
  }
});
