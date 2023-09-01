import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumDetailsScreen, AlbumsListScreen} from 'screens';
import {AlbumsListStackParams} from 'navigator/type/types';
import {HeaderButton} from 'components';
// import {NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type AlbumsListStackNavigatorProps = {
  navigation: NativeStackNavigationProp<AlbumsListStackParams>;
};

export const AlbumsListStackNavigator = ({
  navigation,
}: AlbumsListStackNavigatorProps) => {
  //Header Options
  const options = {
    headerBackTitleVisible: false,
    headerBackImage: () => (
      <HeaderButton
        variant="icon-button"
        iconName="chevron-back-outline"
        iconColor="black"
        buttonAction={() => {
          navigation.goBack();
        }}
      />
    ),
  };

  const Stack = createNativeStackNavigator<AlbumsListStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: true,
      }}>
      <Stack.Screen name="AlbumsListScreen" component={AlbumsListScreen} />
      <Stack.Group screenOptions={{}}>
        <Stack.Screen
          name="AlbumDetailsScreen"
          component={AlbumDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
