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
    width: Dimensions.get('screen').width * 35 / 100,
    marginHorizontal: 5,
  },
  imgContainer: {
    marginBottom: 10
  },
  img: {
    width: '100%',
    height: 190,
    borderRadius: 10,
  },

  descContainer: {
    marginBottom: 5,
  },
  descDate: {
    color: colors.primaryColor,
    fontFamily: fonts.roboto.light,
    fontSize: 12
  },
  descTitle: {
    color: colors.primaryColor, 
    fontFamily: fonts.roboto.medium,
    fontSize: 14
  }
});