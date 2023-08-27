import React, {ReactNode, useCallback} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import {Card} from 'components';
import {API_URL} from '@env';
import {useAlbumsListQuery} from 'redux-store';
import {AlbumsListStackScreenProps} from 'navigator';
import {useResponsive} from 'custom-hooks';
import {AlbumCard} from 'components';
import {styles} from './styles';
import {useTypedSelector} from 'redux-store';
import {ThemeProvider} from 'components';

export const AlbumsListScreen = ({
  route,
  navigation,
}: AlbumsListStackScreenProps) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {data, error, isLoading, refetch} = useAlbumsListQuery();
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh, mode});

  return (
    <ThemeProvider>
      <View style={Styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={Styles.scrollView}>
          <View style={Styles.albumCardsContainer}>
            {data?.slice(0, 10).map((item, index) => {
              return <AlbumCard key={item.id} {...item} />;
            })}
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
  );
};
