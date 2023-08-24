import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParams} from 'navigator/type/types';
import {TabNavigator} from 'navigator/tab-navigator/TabNavigator';
import {DrawerContent} from 'components';

export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerParams>();
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
