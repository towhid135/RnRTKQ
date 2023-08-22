import React from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {AlbumsListStackNavigator} from 'navigator/stack-navigator';

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AlbumsListStackNavigator />
    </NavigationContainer>
  );
};
