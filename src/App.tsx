import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppNavigator} from 'navigator';
import {Provider} from 'react-redux';
import {store} from 'redux-store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
