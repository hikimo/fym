import { StyleSheet } from 'react-native';
import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 15
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 15
  },
  title: {
    fontFamily: fonts.roboto.medium,
    fontSize: 24,
    marginBottom: 5
  },

  subText: {
    fontSize: 14,
    fontFamily: fonts.roboto.regular,
    color: colors.gray
  }
});