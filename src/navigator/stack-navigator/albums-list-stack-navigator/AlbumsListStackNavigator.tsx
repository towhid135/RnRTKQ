import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AlbumDetailsScreen, AlbumsListScreen} from 'screens';
import {AlbumsListStackParams} from 'navigator/type/types';

export const AlbumsListStackNavigator: React.FC = () => {
  const Stack = createStackNavigator<AlbumsListStackParams>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="AlbumsListScreen" component={AlbumsListScreen} />
      <Stack.Screen
        name="AlbumDetailsScreen"
        component={AlbumDetailsScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};
