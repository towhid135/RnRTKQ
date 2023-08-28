import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {styles} from './styles';
import {ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {AlbumDetailsScreenProps} from 'navigator';

export const AlbumDetailsScreen = ({
  route,
  navigation,
}: AlbumDetailsScreenProps) => {
  const {albumId, thumbnailUrl, id, title, url} = route.params.album;
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const Styles = styles({Rp, Rh, mode});
  return (
    <ThemeProvider>
      <View style={Styles.container}>
        <Image source={{uri: url}} style={Styles.image} />
        <Text style={Styles.title}>Title: {title}</Text>
        <Text style={Styles.title}>Album Id: {id}</Text>
      </View>
    </ThemeProvider>
  );
};
