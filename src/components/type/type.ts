import {ReactNode} from 'react';
import {StyleSheet, ViewProps, ColorValue} from 'react-native';
import {IconsId} from 'utils';

export type CardProps = ViewProps & {
  children: ReactNode;
};

export interface AlbumCardProps {
  album: Album;
  cardPressHandler: () => void;
}

export interface ArtistCardProps {
  artist: Artist;
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
export type IconName = 'menu-outline' | 'chevron-back-outline';
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

export interface IconProps {
  name: IconsId;
  size: ComponentSize;
  color: ColorValue;
}
export type ComponentSize = 'small' | 'medium' | 'large';

export type ComponentState = 'enabled' | 'pressed' | 'disabled';

export type ComponentType = 'primary' | 'secondary' | 'teritary';

export interface CustomButtonProps {
  buttonName: string;
  type: ComponentType;
  size: ComponentSize;
  state: ComponentState;
  leftIcon?: boolean;
  rightIcon?: boolean;
  iconName?: IconsId;
}
