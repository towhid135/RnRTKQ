import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {IconButton} from './icon-button/IconButton';
import {
  HeaderButtonProps,
  IconButtonProps,
  ImageButtonProps,
} from 'components/type/type';

export const HeaderButton = (Props: HeaderButtonProps & ViewProps) => {
  const {variant, buttonAction, style} = Props;
  switch (variant) {
    case 'icon-button':
      const {iconName, iconColor} = Props as IconButtonProps;
      return (
        <IconButton
          iconName={iconName}
          iconColor={iconColor}
          buttonAction={buttonAction}
          style={style}
        />
      );
    case 'image-button':
      const {imageUrl} = Props as ImageButtonProps;
      return <View></View>;
    default:
      return <View></View>;
  }
};
