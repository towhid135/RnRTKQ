import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArtistsListStackScreenProps} from 'navigator';
import {useAlbumsListQuery} from 'redux-store';
import {ThemeProvider} from 'components';
import {HeaderButton} from 'components';
import {useResponsive} from 'custom-hooks';

export const ArtistsListScreen = ({
  route,
  navigation,
}: ArtistsListStackScreenProps) => {
  const {Rp, Rh} = useResponsive();
  const {data, error, isLoading, refetch} = useAlbumsListQuery();

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
          style={{marginLeft: Rp(3)}}
        />
      );
    },
  });
  return (
    <ThemeProvider>
      <View>
        <Text style={{color: 'black'}}>ArtistsListScreen</Text>
      </View>
    </ThemeProvider>
  );
};
