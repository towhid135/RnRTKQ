import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';
import type {ReactNode} from 'react';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {CardProps} from 'components/type/type';
import {ThemeProvider} from 'components/theme-provider/ThemeProvider';

export const Card: React.FC<CardProps> = ({children, style, ...rest}) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh, mode});
  return (
    <ThemeProvider style={[Styles.card, style]} {...rest}>
      {children}
    </ThemeProvider>
  );
};
