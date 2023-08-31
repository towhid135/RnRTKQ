import React, {ReactNode, useCallback, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';
import {Card} from 'components';
import {API_URL} from '@env';
import {useAlbumsListQuery, useCreateAlbumMutation} from 'redux-store';
import {AlbumsListScreenProps} from 'navigator';
import {useResponsive} from 'custom-hooks';
import {AlbumCard} from 'components';
import {styles} from './styles';
import {useTypedSelector} from 'redux-store';
import {ThemeProvider} from 'components';
import {HeaderButton} from 'components';
import {Icon} from 'components';

export const AlbumsListScreen = ({
  route,
  navigation,
}: AlbumsListScreenProps) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {data, error, isLoading, refetch} = useAlbumsListQuery();
  const [
    createAlbum,
    {
      data: albumData,
      isLoading: isAlbumLoading,
      isError: createAlbumError,
      isSuccess,
    },
  ] = useCreateAlbumMutation();
  const {Rp, Rh} = useResponsive();

  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();

  const cardPressHandler = (album: Album) => {
    navigation.navigate('AlbumDetailsScreen', {album});
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const CreateAlbum = async () => {
    try {
      const res = await createAlbum().unwrap();
      console.log('res: ', res);
    } catch (err) {
      console.error(err);
    }
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
        <Button title="Add Album" onPress={CreateAlbum} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={Styles.scrollView}
          refreshControl={
            <RefreshControl
              tintColor={'gray'}
              refreshing={isLoading}
              onRefresh={refetch}
            />
          }>
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
