import React, {useCallback} from 'react';
import {Text, View} from 'react-native';

import {CustomButtonProps, ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {SmallButton} from './small-button/SmallButton';
import {MediumButton} from './medium-button/MediumButton';
import {LargeButton} from './large-button/LargeButton';

export const CustomButton = ({
  buttonName,
  type,
  size,
  state,
  leftIcon,
  rightIcon,
  iconName,
}: CustomButtonProps) => {
  switch (size) {
    case 'small':
      return (
        <SmallButton
          buttonName={buttonName}
          type={type}
          size={size}
          state={state}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          iconName={iconName}
        />
      );
    case 'medium':
      return (
        <MediumButton
          buttonName={buttonName}
          type={type}
          size={size}
          state={state}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          iconName={iconName}
        />
      );
    case 'large':
      return (
        <LargeButton
          buttonName={buttonName}
          type={type}
          size={size}
          state={state}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          iconName={iconName}
        />
      );
    default:
      return <View></View>;
  }
};
