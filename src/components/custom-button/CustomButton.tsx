import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {CustomButtonProps} from 'components/type/type';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {CustomButtonUI} from './ui/CustomButtonUI';
import {Icon} from 'components/custom-icon/icon/Icon';
import {CustomText} from 'components/custom-text/CustomText';

export const CustomButton = ({
  buttonName,
  action,
  type,
  size,
  state,
  leftIcon,
  rightIcon,
  iconName,
}: CustomButtonProps) => {
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), []);
  const Styles = StyleFunc();

  let textFont: 'B1' | 'B2' | 'B3';

  switch (size) {
    case 'small':
      textFont = 'B3';
      break;
    case 'medium':
      textFont = 'B2';
      break;
    case 'large':
      textFont = 'B1';
      break;
    default:
      textFont = 'B1';
      return;
  }

  return (
    <CustomButtonUI
      type={type}
      state={state}
      activeOpacity={0.8}
      onPress={action}>
      <View style={Styles[size]}>
        {leftIcon && (
          <Icon
            name={iconName ? iconName : 'Cancel'}
            size={size}
            color={Styles.icon.color}
          />
        )}
        <CustomText style={Styles.text} font={textFont}>
          {buttonName}
        </CustomText>
        {rightIcon && (
          <Icon name="Arrow-Left" size={size} color={Styles.icon.color} />
        )}
      </View>
    </CustomButtonUI>
  );
};
