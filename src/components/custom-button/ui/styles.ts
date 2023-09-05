import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    primary: {
      backgroundColor: colors[mode].brand.primary.normal,
      // width: Rp(64),
      borderRadius: Rp(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondary: {
      backgroundColor: colors[mode].brand.secondary.normal,
      // width: Rp(64),
      borderRadius: Rp(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
    teritary: {
      backgroundColor: colors[mode].brand.tertiary.normal,
      // width: Rp(64),
      borderRadius: Rp(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
    disable: {
      backgroundColor: colors[mode].base.tertiary.normal,
      // width: Rp(64),
      borderRadius: Rp(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
