import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';

export const ScreenTemplate = () => {
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), []);
  const Styles = StyleFunc();
  return (
    <ThemeProvider>
      <Text>ScreenTemplate</Text>
    </ThemeProvider>
  );
};
