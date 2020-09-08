import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  fixedLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 5,
    paddingHorizontal: 35,
    backgroundColor: colors.primaryColor,
    transform: [
      { rotate: '45deg' },
      { translateY: -10 },
      { translateX: 30 }
    ]
  },
  fixedLabelText: {
    fontFamily: fonts.roboto.regular,
    fontSize: 12,
    textTransform: 'uppercase',
    color: colors.lightColor,
  },

  dot: {
    backgroundColor: colors.gray,
    width: 15,
    height: 4,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: colors.lightGreen
  }
});