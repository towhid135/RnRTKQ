import React, {ReactNode, useCallback, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import {Card} from 'components';
import {API_URL} from '@env';
import {useAlbumsListQuery} from 'redux-store';
import {AlbumsListScreenProps} from 'navigator';
import {useResponsive} from 'custom-hooks';
import {AlbumCard} from 'components';
import {styles} from './styles';
import {useTypedSelector} from 'redux-store';
import {ThemeProvider} from 'components';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderButton} from 'components';

export const AlbumsListScreen = ({
  route,
  navigation,
}: AlbumsListScreenProps) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {data, error, isLoading, refetch} = useAlbumsListQuery();
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh, mode});

  const cardPressHandler = (album: Album) => {
    navigation.navigate('AlbumDetailsScreen', {album});
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  navigation.setOptions({
    headerLeft: () => {
      return (
        <HeaderButton
          variant="icon-button"
          iconName="menu-outline"
          iconColor="black"
          buttonAction={toggleDrawer}
          style={Styles.headerLeft}
        />
      );
    },
  });

  return (
    <ThemeProvider>
      <View style={Styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={Styles.scrollView}>
          <View style={Styles.albumCardsContainer}>
            {data?.slice(0, 10).map((item, index) => {
              return (
                <AlbumCard
                  key={item.id}
                  album={item}
                  cardPressHandler={cardPressHandler.bind(this, item)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
  );
};
