import {albumApi} from './api';

const albumsList = albumApi.injectEndpoints({
  endpoints: build => ({
    albumsList: build.query<AlbumsList, void>({
      query: () => 'photos',
    }),
    artistsList: build.query<ArtistList, void>({
      query: () => 'users',
    }),
    createAlbum: build.mutation<Album, void>({
      query: () => ({
        url: 'photos',
        method: 'POST',
        body: JSON.stringify({
          albumId: 5009,
          title: 'Ei Sohor',
          url: `https://i.ytimg.com/vi/JirEG9LIJTU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPyhKMA8=&rs=AOn4CLC4_6u9jfWE6gT28IEUF2NbUpHMnQ`,
          thumbnailUrl: `https://i.ytimg.com/vi/JirEG9LIJTU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgPyhKMA8=&rs=AOn4CLC4_6u9jfWE6gT28IEUF2NbUpHMnQ`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      // Update the cache after successful creation
      async onQueryStarted(data: any, {dispatch, queryFulfilled}) {
        await queryFulfilled; // Wait for the query to be fulfilled
        await dispatch(albumsList.endpoints.albumsList.initiate()); // Fetch the updated albumsList
      },
    }),
  }),
  overrideExisting: false,
});

export const {useAlbumsListQuery, useArtistsListQuery, useCreateAlbumMutation} =
  albumsList;
