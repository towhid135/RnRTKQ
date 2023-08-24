import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from 'navigator/drawer-navigator/DrawerNavigator';
import {getMode} from 'utils';
import {fetchModeOnRedux} from 'redux-store/slice';
import {useDispatch} from 'react-redux';

export const AppNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const fetchMode = async () => {
    const mode: Theme | undefined = await getMode();
    dispatch(fetchModeOnRedux(mode === undefined ? 'light' : mode));
  };
  useEffect(() => {
    fetchMode();
  }, []);
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
