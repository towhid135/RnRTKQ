import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    card: {
      marginVertical: Rp(2),
    },
    details: {
      padding: Rp(15),
      width: Rp(170),
      height: Rh(180),
    },
    textStyle: {
      maxWidth: Rp(160),
      color: colors[mode].base.primary.normal,
    },
  });
