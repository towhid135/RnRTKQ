import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    card: {
      marginVertical: Rp(2),
    },
    details: {
      padding: Rp(3),
      width: Rp(45),
      height: Rh(20),
    },
    textStyle: {
      maxWidth: Rp(40),
      color: colors[mode].base.primary.normal,
    },
  });
