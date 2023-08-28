import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import {styles} from './styles';
import {IconButtonProps, ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import Icon1 from 'react-native-vector-icons/Ionicons';

export const IconButton = ({
  iconName,
  iconColor,
  buttonAction,
  style,
}: IconButtonProps & ViewProps) => {
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const Styles = styles({Rp, Rh, mode});
  return (
    <TouchableOpacity
      onPress={buttonAction}
      activeOpacity={1}
      style={[Styles.container, style]}>
      <Icon1 name={iconName} size={Rp(8)} color={iconColor} />
    </TouchableOpacity>
  );
};
