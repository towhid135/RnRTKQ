/*store.type.ts file doesn't require to export types.
Types declared here can be used in other files without importing.
*/
interface Album {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type AlbumsList = Array<Album>;
