import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, ViewProps} from 'react-native';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {SwitchElementProps} from 'components/type/type';
import {useTypedSelector} from 'redux-store';
import {toggleMode} from 'redux-store/slice';

export const SwitchElement = ({
  title,
  action,
  style,
}: ViewProps & SwitchElementProps) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const [switchState, setSwitchState] = useState(
    mode === 'dark' ? true : false,
  );
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh, mode});

  const switchToggleAction = () => {
    setSwitchState(prev => !prev);
    action();
  };
  return (
    <View style={[Styles.container, style]}>
      <Text style={Styles.titleStyle}>{title}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={switchState ? '#81b0ff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={switchToggleAction}
        value={switchState}
      />
    </View>
  );
};
