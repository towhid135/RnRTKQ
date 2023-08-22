import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';
import type {ReactNode} from 'react';
import {cardStyle} from './cardStyle';

type CardProps = ViewProps & {
  children: ReactNode;
};

export const Card: React.FC<CardProps> = ({children, style, ...rest}) => {
  const styles = StyleSheet.create({});
  return (
    <View style={[cardStyle.card, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
