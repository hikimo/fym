import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.primaryColor,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.roboto.light,
    color: colors.lightGreen
  }
});