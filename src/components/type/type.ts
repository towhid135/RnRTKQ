import {ReactNode} from 'react';
import {StyleSheet, ViewProps} from 'react-native';

export type CardProps = ViewProps & {
  children: ReactNode;
};

export interface AlbumCardProps {
  album: Album;
  cardPressHandler: () => void;
}

export type DrawerElementVariant = 'switch-element' | 'icon-element';
export type ElementTitle = 'Dark Mode';

export interface DrawerElementProps {
  variant: DrawerElementVariant;
  title: ElementTitle;
  action: () => void;
}

export type SwitchElementProps = Omit<DrawerElementProps, 'variant'>;

export type IconButtonVariant = 'icon-button' | 'image-button';
export type IconName = 'menu-outline';
export interface IconButtonProps {
  iconName: IconName;
  iconColor: string;
  buttonAction: () => void;
}

export interface ImageButtonProps {
  imageUrl: string;
  buttonAction: () => void;
}

export type HeaderButtonProps = (IconButtonProps | ImageButtonProps) & {
  variant: IconButtonVariant;
};
