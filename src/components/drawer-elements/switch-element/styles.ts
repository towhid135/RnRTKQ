import {StyleSheet} from 'react-native';
import {colors} from 'theme';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      padding: Rp(2),
      borderRadius: Rp(1),
      width: '95%',
    },
    titleStyle: {
      color: colors[mode].textColor,
    },
  });
