import {StyleSheet} from 'react-native';
import {h, w} from '../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
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
    marginBottom: 20,
    width: w * 0.2,
    position: 'absolute',
    top: -15,
  },
  text: {
    fontSize: 15,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    marginTop: h * 0.06,
  },
  firstImage: {
    position: 'absolute',
    top: 10,
    zIndex: 10,
  },
  secondImage: {
    marginLeft: -w * 0.09,
    objectFit: 'contain',
  },
  bottomText: {
    color: 'white',
    fontSize: 20,
    marginTop: -h * 0.07,
    fontWeight: 'bold',
  },
});
