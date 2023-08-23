import React from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {AlbumsListStackNavigator} from 'navigator/stack-navigator';
import {TabNavigator} from 'navigator/tab-navigator/TabNavigator';

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
