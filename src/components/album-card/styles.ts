import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    card: {
      marginVertical: Rp(10),
      height: Rp(170),
      width: Rp(170),
    },
    imageTextContainer: {
      padding: Rp(10),
      height: Rp(150),
      width: Rp(150),
    },
    imageStyle: {
      height: Rh(100),
      width: Rp(150),
      borderRadius: Rp(10),
    },
    textStyle: {
      maxWidth: Rp(150),
      color: colors[mode].base.primary.normal,
    },
  });
