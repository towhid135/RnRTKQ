import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Album {
  albumName: string;
}

const AlbumsListScreen: React.FC<Album> = props => {
  const {albumName} = props;
  console.log('albumName: ', albumName);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{albumName}</Text>
      <Text>AlbumsListScreen</Text>
      <Text>AlbumsListScreen</Text>
      <Text>AlbumsListScreen</Text>
      <Text>AlbumsListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AlbumsListScreen;
