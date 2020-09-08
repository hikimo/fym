import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  leftContainer: {
    marginLeft: 15
  },
  rightContainer: {
    marginRight: 15
  },
  container: {
    width: Dimensions.get('screen').width - 60,
    height: 180,
    marginHorizontal: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  imgBg: {
    resizeMode: 'cover',
    borderRadius: 20,
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.overlay
  },

  descContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
    position: 'absolute',
    bottom: 10,
  },
  descDate: {
    color: colors.lightColor,
    fontFamily: fonts.roboto.light,
    fontSize: 12
  },
  descTitle: {
    color: colors.lightColor, 
    fontFamily: fonts.roboto.regular,
    fontSize: 22
  }
})