import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Card} from 'components/card';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {styles} from './styles';
import {AlbumCardProps} from 'components/type/type';

export const AlbumCard = ({album, cardPressHandler}: AlbumCardProps) => {
  const {albumId, id, thumbnailUrl, title, url} = album;
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh, mode});
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={cardPressHandler}>
      <Card key={id} style={Styles.card}>
        <View style={Styles.imageTextContainer}>
          <Image source={{uri: url}} style={Styles.imageStyle} />
          <Text numberOfLines={2} style={Styles.textStyle}>
            {title}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
