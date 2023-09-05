import React, {useCallback} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import type {ReactNode} from 'react';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {CardProps} from 'components/type/type';
import {ThemeProvider} from 'components/theme-provider/ThemeProvider';

export const Card: React.FC<CardProps> = ({style, ...rest}) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();
  //children is coming from the inside of th ...rest
  return <ThemeProvider style={[Styles.card, style]} {...rest} />;
};
