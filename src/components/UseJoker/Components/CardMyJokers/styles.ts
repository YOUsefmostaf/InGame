import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 25,
    padding: 20,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    color: 'white',
    top: 10,
    right: 10,
    backgroundColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 100,
    textAlign: 'center',
    lineHeight: 30,
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  containerImage: {
    marginTop: -108,
    marginLeft: -10,
  },
  star: {
    marginTop: -90,
    marginLeft: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
  },
});
