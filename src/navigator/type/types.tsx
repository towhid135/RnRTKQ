import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';

export type AlbumsListStackParams = {
  AlbumsListScreen: undefined;
};

export type ArtistsListStackParams = {
  ArtistsListScreen: undefined;
};

// export type AlbumsListStackScreenProps = StackScreenProps<
//   AlbumsListStackParams,
//   'AlbumsListScreen'
// >;

export type BottomTabParams = {
  Home: undefined;
  Artists: undefined;
};

export type DrawerParams = {
  BottomTab: undefined;
};

// export type BottomTabScreenProps = BottomTabScreenProps<
//   BottomTabParams,
//   'Home'
// >;

export type AlbumsListStackScreenProps = CompositeScreenProps<
  StackScreenProps<AlbumsListStackParams, 'AlbumsListScreen'>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParams>,
    DrawerScreenProps<DrawerParams>
  >
>;

export type ArtistsListStackScreenProps = CompositeScreenProps<
  StackScreenProps<ArtistsListStackParams, 'ArtistsListScreen'>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParams>,
    DrawerScreenProps<DrawerParams>
  >
>;
