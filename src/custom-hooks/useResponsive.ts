import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

export const useResponsive = (): UseResponsive => {
  const {height, width} = useWindowDimensions();

  type Width = typeof width;
  type Height = typeof height;

  const Rp = (value: Width): Width => {
    // return width * (value / 1000);
    return (width * value) / 100;
  };
  const Rh = (value: Height): Height => {
    // return height * (value / 1000);
    return (height * value) / 100;
  };

  return {
    Rp,
    Rh,
  };
};

const styles = StyleSheet.create({});
