import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    small: {
      flexDirection: 'row',
      justifyContent: 'center',

      // borderWidth: 1,
      paddingVertical: Rp(12),
      paddingHorizontal: Rp(16),
    },
    medium: {
      flexDirection: 'row',
      justifyContent: 'center',

      // borderWidth: 1,
      paddingVertical: Rp(12),
      paddingHorizontal: Rp(32),
    },
    large: {
      flexDirection: 'row',
      justifyContent: 'center',

      // borderWidth: 1,
      paddingVertical: Rp(12),
      paddingHorizontal: Rp(32),
    },
    text: {
      color: colors[mode].base.tertiary.light,
      marginHorizontal: Rp(5),
    },

    icon: {
      color: colors[mode].base.tertiary.light,
    },
  });
