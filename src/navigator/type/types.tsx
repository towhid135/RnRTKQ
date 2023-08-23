import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
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

// export type BottomTabScreenProps = BottomTabScreenProps<
//   BottomTabParams,
//   'Home'
// >;

export type AlbumsListStackScreenProps = CompositeScreenProps<
  StackScreenProps<AlbumsListStackParams, 'AlbumsListScreen'>,
  BottomTabScreenProps<BottomTabParams, 'Home'>
>;

export type ArtistsListStackScreenProps = CompositeScreenProps<
  StackScreenProps<ArtistsListStackParams, 'ArtistsListScreen'>,
  BottomTabScreenProps<BottomTabParams, 'Home'>
>;
