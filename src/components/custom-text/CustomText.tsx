import React, {useCallback} from 'react';
import {Text, View, TextProps} from 'react-native';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';

interface CustomTextProps extends TextProps {
  font: keyof ReturnType<typeof styles>;
}

export const CustomText = ({font, style, ...rest}: CustomTextProps) => {
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();
  return <Text style={[Styles[font], style]} {...rest} />;
};
