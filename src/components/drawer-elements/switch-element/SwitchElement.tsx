import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {SwitchElementProps} from 'components/type/type';

export const SwitchElement = ({title, action}: SwitchElementProps) => {
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh});
  return (
    <View style={Styles.container}>
      <Text>Dark Mode</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {}}
        value={true}
      />
    </View>
  );
};
