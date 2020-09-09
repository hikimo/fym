import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightColor,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  headingTitle: {
    letterSpacing: 4,
    fontFamily: fonts.roboto.regular,
    fontSize: 32,
    color: colors.primaryColor
  },
  headingSubTitle: {
    fontFamily: fonts.roboto.light,
    fontSize: 12,
    color: colors.primaryColor
  },

  MenuContainer: {
    paddingLeft: 15,
    paddingRight: 0,
  },
  Menu: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    width: '95%',
    padding: 10,
    paddingLeft: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.primaryColor,
    elevation: 4
  },
  MenuText: {
    fontSize: 16,
    fontFamily: fonts.roboto.medium,
    color: colors.lightColor,
  },

  FooterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FooterText: {
    fontSize: 14,
    fontFamily: fonts.roboto.regular,
    color: colors.primaryColor,
  },
});
