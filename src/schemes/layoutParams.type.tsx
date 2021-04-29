import { SongScheme } from "./Song.scheme";

export type layoutParams = {
  favoriteSongs: Array<any>,
  valuesSong: songControl,
  setFavoriteSongs: Function,
  setCurrentSong: Function
}

export type songControl = {
  isPlayingSong: boolean,
  currentSong: SongScheme
}