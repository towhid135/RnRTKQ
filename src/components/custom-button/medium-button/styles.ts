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
    iconAndTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',

      // borderWidth: 1,
      paddingVertical: Rp(12),
      paddingHorizontal: Rp(32),
    },
    text: {
      fontSize: Rp(10),
      fontWeight: 'bold',
      color: colors[mode].base.tertiary.light,
      marginHorizontal: Rp(8),
      alignSelf: 'center',
    },

    icon: {
      color: colors[mode].base.tertiary.light,
    },
  });
