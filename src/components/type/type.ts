import {ReactNode} from 'react';
import {StyleSheet, ViewProps} from 'react-native';

export type CardProps = ViewProps & {
  children: ReactNode;
};

export type DrawerElementVariant = 'switch-element' | 'icon-element';
export type ElementTitle = 'Dark Mode';

export interface DrawerElementProps {
  variant: DrawerElementVariant;
  title: ElementTitle;
  action: () => void;
}

export type SwitchElementProps = Omit<DrawerElementProps, 'variant'>;
