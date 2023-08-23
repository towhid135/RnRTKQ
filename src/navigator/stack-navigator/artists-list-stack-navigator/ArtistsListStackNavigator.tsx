import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtistsListScreen} from 'screens';
import {ArtistsListStackParams} from 'navigator/type/types';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-store';
import {albumApi} from 'redux-store/api/album';

export const ArtistsListStackNavigator: React.FC = () => {
  const albums = useSelector((state: RootState) => state.albumsList);
  console.log('albumsList from Artists: ', albums);
  const Stack = createStackNavigator<ArtistsListStackParams>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ArtistsListScreen" component={ArtistsListScreen} />
    </Stack.Navigator>
  );
};
