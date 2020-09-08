import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor
  },
  titleContainer: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: colors.lightColor
  },
  title: {
    color: colors.lightColor,
    fontSize: 42,
    fontFamily: fonts.roboto.light,
    letterSpacing: 9
  },
  subTitle: {
    color: colors.lightColor,
    fontFamily: fonts.roboto.thin,
    textTransform: 'uppercase'
  }
});