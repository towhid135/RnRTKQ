import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
