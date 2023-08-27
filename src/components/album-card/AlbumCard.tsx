import React from 'react';
import {Text, View, Image} from 'react-native';
import {Card} from 'components/card';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {styles} from './styles';

export const AlbumCard: React.FC<Album> = Album => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const Styles = styles({Rp, Rh, mode});
  return (
    <Card key={Album.id} style={Styles.card}>
      <View style={Styles.imageTextContainer}>
        <Image source={{uri: Album.url}} style={Styles.imageStyle} />
        <Text numberOfLines={2} style={Styles.textStyle}>
          {Album.title}
        </Text>
      </View>
    </Card>
  );
};
