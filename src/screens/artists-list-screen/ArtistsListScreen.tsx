import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArtistsListStackScreenProps} from 'navigator';
import {useAlbumsListQuery} from 'redux-store';
import {ThemeProvider} from 'components';

export const ArtistsListScreen = ({
  route,
  navigation,
}: ArtistsListStackScreenProps) => {
  const {data, error, isLoading, refetch} = useAlbumsListQuery();

  // console.log('data from artist list: ', data?.slice(0, 10));
  return (
    <ThemeProvider>
      <View>
        <Text>ArtistsListScreen</Text>
      </View>
    </ThemeProvider>
  );
};
