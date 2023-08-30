import React, {useCallback} from 'react';
import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import {ArtistsListStackScreenProps} from 'navigator';
import {useArtistsListQuery} from 'redux-store';
import {ThemeProvider} from 'components';
import {HeaderButton} from 'components';
import {useResponsive} from 'custom-hooks';
import {ArtistCard} from 'components/artist-card/ArtistCard';
import {styles} from './styles';
import {useTypedSelector} from 'redux-store';

export const ArtistsListScreen = ({
  route,
  navigation,
}: ArtistsListStackScreenProps) => {
  const mode = useTypedSelector(state => state.colorMode.mode);
  const {Rp, Rh} = useResponsive();
  const {data, error, isLoading, refetch} = useArtistsListQuery();
  const StyleFunc = useCallback(() => styles({Rp, Rh, mode}), [mode]);
  const Styles = StyleFunc();

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
      <View style={Styles.container}>
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
                <ArtistCard
                  key={item.id}
                  artist={item}
                  cardPressHandler={() => {}}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
  );
};
