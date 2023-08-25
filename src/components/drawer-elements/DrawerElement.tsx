import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerElementProps} from 'components/type/type';
import {SwitchElement} from './switch-element/SwitchElement';

export const DrawerElement = ({variant, title, action}: DrawerElementProps) => {
  switch (variant) {
    case 'switch-element':
      return <SwitchElement title={title} action={action} />;
    case 'icon-element':
      return <View></View>;
    default:
      return <View></View>;
  }
};
