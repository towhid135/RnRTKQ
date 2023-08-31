import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    card: {
      marginVertical: Rp(2),
    },
    imageTextContainer: {
      padding: Rp(3),
    },
    imageStyle: {
      height: Rh(10),
      width: Rp(40),
    },
    textStyle: {
      maxWidth: Rp(40),
      color: colors[mode].base.primary.normal,
    },
  });
