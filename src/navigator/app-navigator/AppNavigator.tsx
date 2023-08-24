import React, {useEffect} from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {AlbumsListStackNavigator} from 'navigator/stack-navigator';
import {TabNavigator} from 'navigator/tab-navigator/TabNavigator';
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
      <TabNavigator />
    </NavigationContainer>
  );
};
