import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    safeAreView: {
      flex: 1,
      alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    switchElementStyle: {
      marginTop: Rp(2),
    },
  });
