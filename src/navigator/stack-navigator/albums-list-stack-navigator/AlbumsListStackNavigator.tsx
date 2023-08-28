import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {AlbumDetailsScreen, AlbumsListScreen} from 'screens';
import {
  AlbumsListScreenProps,
  AlbumsListStackParams,
} from 'navigator/type/types';
import {HeaderButton} from 'components';
import {useResponsive} from 'custom-hooks';

export const AlbumsListStackNavigator: React.FC = ({navigation}) => {
  //Header Options
  const options = {
    headerBackTitle: ' ',
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

  const Stack = createStackNavigator<AlbumsListStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        ...options,
      }}>
      <Stack.Screen name="AlbumsListScreen" component={AlbumsListScreen} />
      <Stack.Screen
        name="AlbumDetailsScreen"
        component={AlbumDetailsScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};
