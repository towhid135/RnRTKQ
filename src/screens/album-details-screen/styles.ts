import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: Rh(40),
    },
    title: {
      color: colors[mode].base.primary.normal,
      marginVertical: Rp(5),
    },
  });
