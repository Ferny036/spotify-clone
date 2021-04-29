export interface ArtistScheme {
  id: number,
  name: string,
  picture: string
}

export interface AlbumScheme {
  id: number,
  title: string,
  cover: string
}

export interface SongScheme {
  id: string,
  title: string,
  preview: string,
  artist: ArtistScheme,
  album: AlbumScheme
}