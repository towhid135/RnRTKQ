import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import {useResponsive} from 'custom-hooks';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh});
  return (
    <View style={Styles.container}>
      <Text>DrawerContent</Text>
    </View>
  );
};
