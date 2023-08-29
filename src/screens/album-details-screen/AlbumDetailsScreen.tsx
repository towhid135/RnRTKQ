import React, {useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {styles} from './styles';
import {ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {AlbumDetailsScreenProps} from 'navigator';
import Animated from 'react-native-reanimated';
import {screenTransition} from 'utils';

export const AlbumDetailsScreen = ({
  route,
  navigation,
}: AlbumDetailsScreenProps) => {
  const {albumId, thumbnailUrl, id, title, url} = route.params.album;
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), []);
  const Styles = StyleFunc();
  return (
    <ThemeProvider>
      <View style={Styles.container}>
        <Animated.Image
          source={{uri: url}}
          style={Styles.image}
          sharedTransitionTag={url}
          sharedTransitionStyle={screenTransition}
        />
        <Text style={Styles.title}>Title: {title}</Text>
        <Text style={Styles.title}>Album Id: {id}</Text>
      </View>
    </ThemeProvider>
  );
};
