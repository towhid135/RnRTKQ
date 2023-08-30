import {albumApi} from './api';

const albumsList = albumApi.injectEndpoints({
  endpoints: build => ({
    albumsList: build.query<AlbumsList, void>({
      query: () => 'photos',
    }),
    artistsList: build.query<ArtistList, void>({
      query: () => 'users',
    }),
  }),
  overrideExisting: false,
});

export const {useAlbumsListQuery, useArtistsListQuery} = albumsList;
