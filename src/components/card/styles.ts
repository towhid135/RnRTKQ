import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    card: {
      shadowColor: colors[mode].shadow,
      shadowOpacity: 0.15,
      shadowOffset: {width: 0.15, height: 0.15},
      shadowRadius: 10,
      elevation: 7,
      borderRadius: 15,
      flex: 0,
      // backgroundColor: colors[mode].background,
    },
  });
