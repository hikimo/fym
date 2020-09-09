import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryColor
  },
  searchGroup: {
    flex: 4,
    paddingHorizontal: 10,
    backgroundColor: colors.lightColor,
    borderRadius: 5
  },
  inputForm: {
    paddingVertical: 5,
    color: colors.black
  },
  sideContent: {
    flex: 1,
    alignItems: 'center',
  },

  icons: {
    color: colors.lightColor
  }
});