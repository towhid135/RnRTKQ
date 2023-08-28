import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import {ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';

export const ScreenTemplate = () => {
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const Styles = styles({Rp, Rh, mode});
  return (
    <ThemeProvider>
      <View></View>
    </ThemeProvider>
  );
};
