import React, {useEffect, useRef, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardProps} from 'components/type/type';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {styles} from './styles';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const ThemeProvider = ({children, style, ...rest}: CardProps) => {
  const isFirstRender = useRef(true);
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), []);
  const Styles = StyleFunc();

  const colorMode = useSharedValue<number>(mode === 'light' ? 0 : 1);

  useEffect(() => {
    if (!isFirstRender.current) {
      if (colorMode.value === 0)
        colorMode.value = withTiming(1, {duration: 500});
      else colorMode.value = withTiming(0, {duration: 500});
    } else {
      isFirstRender.current = false;
    }
  }, [mode]);

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorMode.value,
      [0, 1],
      ['#ffffff', '#000000'],
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View
      style={[Styles.container, style, backgroundColorStyle]}
      {...rest}>
      {children}
    </Animated.View>
  );
};
