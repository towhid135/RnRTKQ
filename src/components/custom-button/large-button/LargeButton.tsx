import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {CustomButtonProps, Icon, ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {colors} from 'theme';

export const LargeButton = ({
  buttonName,
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

  return (
    <TouchableOpacity style={Styles[type]} activeOpacity={1} onPress={() => {}}>
      <View style={Styles.iconAndTextContainer}>
        {leftIcon && (
          <Icon
            name={iconName ? iconName : 'Cancel'}
            size={size}
            color={Styles.icon.color}
          />
        )}
        <Text style={Styles.text}>{buttonName}</Text>
        {rightIcon && (
          <Icon name="Arrow-Left" size={size} color={Styles.icon.color} />
        )}
      </View>
    </TouchableOpacity>
  );
};
