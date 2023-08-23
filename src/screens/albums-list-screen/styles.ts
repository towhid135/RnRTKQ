import {StyleSheet} from 'react-native';
import {useResponsive} from 'custom-hooks';

export const styles = ({Rp, Rh}: UseResponsive) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
  });
