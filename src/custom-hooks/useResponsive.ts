import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

export const useResponsive = (): UseResponsive => {
  const {height, width} = useWindowDimensions();

  type Width = typeof width;
  type Height = typeof height;

  const Rp = (value: Width): Width => {
    //according to screen width from figma: width 375
    return (width * value) / 375;
  };
  const Rh = (value: Height): Height => {
    //according to screen height from figma: height 812
    return (height * value) / 812;
  };

  return {
    Rp,
    Rh,
  };
};

const styles = StyleSheet.create({});
