import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import {Card} from 'components';
import {API_URL} from '@env';
import {useAlbumsListQuery} from 'redux-store';
import {AlbumsListStackScreenProps} from 'navigator';
import {useResponsive} from 'custom-hooks';
import {AlbumCard} from 'components';
import {styles} from './styles';
export const AlbumsListScreen = ({
  route,
  navigation,
}: AlbumsListStackScreenProps) => {
  const {data, error, isLoading, refetch} = useAlbumsListQuery();
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh});

  return (
    <View style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.scrollView}>
        <View style={Styles.albumCardsContainer}>
          {data?.slice(0, 10).map((item, index) => {
            return <AlbumCard {...item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};
