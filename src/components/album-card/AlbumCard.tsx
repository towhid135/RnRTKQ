import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'components/card';
import {useResponsive} from 'custom-hooks';

export const AlbumCard: React.FC<Album> = Album => {
  const {Rp, Rh} = useResponsive();
  return (
    <Card
      key={Album.id}
      style={{
        marginVertical: Rp(2),
      }}>
      <View style={{padding: Rp(3)}}>
        <Image
          source={{uri: Album.url}}
          style={{height: Rh(10), width: Rp(40)}}
        />
        <Text numberOfLines={2} style={{maxWidth: Rp(40)}}>
          {Album.title}
        </Text>
      </View>
    </Card>
  );
};
