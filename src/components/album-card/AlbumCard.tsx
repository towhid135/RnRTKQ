import React, {useCallback} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Card} from 'components/card';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {styles} from './styles';
import {AlbumCardProps} from 'components/type/type';
import Animated from 'react-native-reanimated';
import {screenTransition} from 'utils';

export const AlbumCard = ({album, cardPressHandler}: AlbumCardProps) => {
  const {albumId, id, thumbnailUrl, title, url} = album;
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), []);
  const Styles = StyleFunc();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={cardPressHandler}>
      <Card key={id} style={Styles.card}>
        <View style={Styles.imageTextContainer}>
          <Animated.Image
            source={{uri: url}}
            style={Styles.imageStyle}
            sharedTransitionTag={url}
            sharedTransitionStyle={screenTransition}
          />
          <Text numberOfLines={2} style={Styles.textStyle}>
            {title}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
