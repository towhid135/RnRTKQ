import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: colors[mode].background,
    },
    scrollView: {
      flex: 1,
    },
    albumCardsContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: Rp(3),
      marginBottom: Rh(5),
    },
    headerLeft: {
      marginLeft: Rp(3),
    },
  });
