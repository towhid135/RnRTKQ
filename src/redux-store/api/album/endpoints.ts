import {albumApi} from './api';

const albumsList = albumApi.injectEndpoints({
  endpoints: build => ({
    albumsList: build.query<AlbumsList, void>({
      query: () => 'photos',
    }),
  }),
  overrideExisting: false,
});

export const {useAlbumsListQuery} = albumsList;
