import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ArtistCardProps, ThemeProvider} from 'components';
import {useResponsive} from 'custom-hooks';
import {useTypedSelector} from 'redux-store';
import {Card} from 'components';

export const ArtistCard = ({artist, cardPressHandler}: ArtistCardProps) => {
  const {id, name, email, website, address} = artist;
  const {Rp, Rh} = useResponsive();
  const mode = useTypedSelector(state => state.colorMode.mode);
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
      <Card key={id} style={Styles.card}>
        <View style={Styles.details}>
          <Text numberOfLines={2} style={Styles.textStyle}>
            {'name: '}
            {name}
          </Text>
          <Text numberOfLines={2} style={Styles.textStyle}>
            {'email: '}
            {email}
          </Text>
          <Text numberOfLines={2} style={Styles.textStyle}>
            {'website: '}
            {website}
          </Text>
          <Text numberOfLines={2} style={Styles.textStyle}>
            {'address: '}
            {address.street}
            {', '}
            {address.city}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
