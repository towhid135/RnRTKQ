import React from 'react';
import CustomIcon from '../CustomIcon';
import {IconsId} from 'utils';
import {ColorValue, ViewProps} from 'react-native';
import {IconProps} from 'components/type/type';
import {useResponsive} from 'custom-hooks';
export const Icon = ({name, size, color, ...rest}: IconProps & ViewProps) => {
  const {Rp, Rh} = useResponsive();
  let iconSize;
  if (size === 'small') iconSize = Rp(16);
  else if (size == 'medium') iconSize = Rp(24);
  else iconSize = Rp(24);
  return <CustomIcon name={name} size={iconSize} color={color} />;
};
