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

interface Geo {
  lat: number;
  lng: number;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Artist {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type ArtistList = [Artist];
