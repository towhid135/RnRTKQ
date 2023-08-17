import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AlbumsListScreen from 'screens/AlbumsListScreen';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <AlbumsListScreen albumName="Anything" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
