import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Switch, ViewProps} from 'react-native';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {SwitchElementProps} from 'components/type/type';
import {useTypedSelector} from 'redux-store';
import {toggleMode} from 'redux-store/slice';
import {colors} from 'theme';

export const SwitchElement = ({
  title,
  action,
  style,
}: ViewProps & SwitchElementProps) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const [switchState, setSwitchState] = useState(mode === 'dark');

  useEffect(() => {
    setSwitchState(mode === 'dark');
  }, [mode]);
  console.log('mode from SwitchElement: ', mode);
  const {Rp, Rh} = useResponsive();
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();

  const switchToggleAction = () => {
    setSwitchState(prev => !prev);
    action();
  };
  return (
    <View style={[Styles.container, style]}>
      <Text style={Styles.titleStyle}>{title}</Text>
      <Switch
        trackColor={{
          false: colors[mode].base.secondary.light,
          true: colors[mode].system.success.normal,
        }}
        thumbColor={colors[mode].base.tertiary.light}
        ios_backgroundColor={colors[mode].base.secondary.light}
        onValueChange={switchToggleAction}
        value={switchState}
      />
    </View>
  );
};
