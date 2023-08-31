import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArtistsListScreen} from 'screens';
import {ArtistsListStackParams} from 'navigator/type/types';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-store';
import {albumApi} from 'redux-store/api/album';

export const ArtistsListStackNavigator: React.FC = () => {
  const albums = useSelector((state: RootState) => state.albumsList);
  const Stack = createNativeStackNavigator<ArtistsListStackParams>();
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen name="ArtistsListScreen" component={ArtistsListScreen} />
    </Stack.Navigator>
  );
};
