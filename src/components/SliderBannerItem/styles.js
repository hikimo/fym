import { StyleSheet } from 'react-native';
import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  itemCover: {
    marginRight: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  itemCoverImg: {
    height: 150,
    width: 100,
  },

  itemDesc: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 5,
  },
  itemDescTitle: {
    marginBottom: 5,
    fontSize: 24,
    fontFamily: fonts.roboto.medium,
    color: colors.lightColor
  },
  itemDescSub: {
    fontSize: 12,
    fontFamily: fonts.roboto.light,
    color: colors.lightColor,
  },

  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});