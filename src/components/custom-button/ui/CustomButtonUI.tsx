import React, {useCallback} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './styles';
import {ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {ComponentState, ComponentType} from 'components';

interface CustomButtonUIProps extends TouchableOpacityProps {
  type: ComponentType;
  state: ComponentState;
}

export const CustomButtonUI = ({
  type,
  state,
  style,
  ...rest
}: CustomButtonUIProps) => {
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();

  return (
    <TouchableOpacity
      style={state != 'disabled' ? Styles[type] : Styles.disable}
      {...rest}
    />
  );
};
