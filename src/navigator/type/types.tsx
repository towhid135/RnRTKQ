import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type AlbumsListStackParams = {
  AlbumsListScreen: undefined;
  AlbumDetailsScreen: {album: Album};
};

export type ArtistsListStackParams = {
  ArtistsListScreen: undefined;
};

// export type AlbumsListStackScreenProps = StackScreenProps<
//   AlbumsListStackParams,
//   'AlbumsListScreen'
// >;

export type BottomTabParams = {
  Home: NavigatorScreenParams<AlbumsListStackParams>;
  Artists: NavigatorScreenParams<ArtistsListStackParams>;
};

export type DrawerParams = {
  BottomTab: NavigatorScreenParams<BottomTabParams>;
};

// export type BottomTabScreenProps = BottomTabScreenProps<
//   BottomTabParams,
//   'Home'
// >;

export type AlbumsListScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AlbumsListStackParams, 'AlbumsListScreen'>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParams>,
    DrawerScreenProps<DrawerParams>
  >
>;

export type AlbumDetailsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AlbumsListStackParams, 'AlbumDetailsScreen'>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParams>,
    DrawerScreenProps<DrawerParams>
  >
>;

export type ArtistsListStackScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ArtistsListStackParams, 'ArtistsListScreen'>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParams>,
    DrawerScreenProps<DrawerParams>
  >
>;
