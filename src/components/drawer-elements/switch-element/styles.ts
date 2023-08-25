import {StyleSheet} from 'react-native';

export const styles = ({Rp, Rh}: UseResponsive) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
