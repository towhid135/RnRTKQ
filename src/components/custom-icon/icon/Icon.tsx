import React from 'react';
import CustomIcon from '../CustomIcon';
import {IconsId} from 'utils';
import {ColorValue, ViewProps} from 'react-native';

interface IconProps {
  name: IconsId;
  size: number;
  color: ColorValue;
}

export const Icon = ({name, size, color, ...rest}: IconProps & ViewProps) => {
  return <CustomIcon name={name} size={size} color={color} />;
};
