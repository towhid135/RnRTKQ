import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerElement} from 'components/drawer-elements';
// import {useTypedSelector} from 'redux-store';
import {useTypedSelector, useTypedDispatch} from 'redux-store';
import {setTheme, toggleMode} from 'redux-store/slice';
import {ThemeProvider} from 'components/theme-provider/ThemeProvider';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useTypedDispatch();
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();

  const switchAction = (mode: Theme) => {
    console.log('switch action pressed');
    dispatch(setTheme(mode));
  };
  return (
    <ThemeProvider>
      <SafeAreaView style={Styles.safeAreView}>
        <DrawerElement
          variant="switch-element"
          title="Dark Mode"
          action={switchAction.bind(this, mode)}
          style={Styles.switchElementStyle}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};
