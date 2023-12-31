import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      // backgroundColor: colors[mode].background,
    },
    switchElementStyle: {
      marginTop: Rp(2),
    },
  });
