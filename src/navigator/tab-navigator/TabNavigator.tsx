import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AlbumsListStackNavigator} from 'navigator/stack-navigator';
import {ArtistsListStackNavigator} from 'navigator/stack-navigator/artists-list-stack-navigator/ArtistsListStackNavigator';
import {BottomTabParams} from 'navigator/type/types';

export const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator<BottomTabParams>();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={AlbumsListStackNavigator} />
      <Tab.Screen name="Artists" component={ArtistsListStackNavigator} />
    </Tab.Navigator>
  );
};
