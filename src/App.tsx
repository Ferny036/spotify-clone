import React, { useEffect, useRef, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage';
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
import { SongScheme } from './schemes/Song.scheme';
import { themeConfig } from "./config/theme.config";
import { Reproductor } from './components/Reproductor';
import { ChakraProvider, Container } from "@chakra-ui/react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { songControl } from './schemes/layoutParams.type';

const theme = themeConfig();

export const App = () => {

  const { getValues, saveValues } = useLocalStorage();
  const [valueControlSong, setValueControlSong] = useState<songControl>({
    isPlayingSong: false,
    currentSong: getValues("currentSong")
  })

  const defaultVolume = () => typeof getValues("volume") !== typeof 1 ? 0.5 : getValues("volume")

  const { currentSong, isPlayingSong } = valueControlSong;

  const favoriteSongs = useRef<Array<SongScheme>>(getValues('favoriteSongs') ?? [])
  const audioSong = useRef(new Audio(currentSong.preview))

  const volume = useRef(defaultVolume())

  const setVolumeValue = (newValue: number) => {
    volume.current = newValue
    saveValues("volume", newValue / 100)
    audioSong.current.volume = newValue / 100
  }

  useEffect(() => {
    audioSong.current.volume = defaultVolume()
    audioSong.current.addEventListener("ended",
      () => setValueControlSong({ ...valueControlSong, isPlayingSong: !isPlayingSong }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    isPlayingSong ? audioSong.current.play() : audioSong.current.pause()
  }, [isPlayingSong, audioSong])

  const handleFavoriteSongs = (song: SongScheme) => {
    let newArray = []
    !favoriteSongs.current.some(item => item.id === song.id)
      ? newArray = [...favoriteSongs.current, song]
      : newArray = favoriteSongs.current.filter(item => item.id !== song.id)
    saveValues("favoriteSongs", newArray)
    favoriteSongs.current = newArray
  }

  const handleCurrentSong = (song: SongScheme) => {
    saveValues("currentSong", song)
    audioSong.current.src = song.preview
    if (song.id !== currentSong.id) {
      setValueControlSong({ isPlayingSong: true, currentSong: song })
    } else {
      setValueControlSong({ ...valueControlSong, isPlayingSong: !isPlayingSong })
    }
  }
  const handlePlay = (value: boolean) => {
    currentSong.id && setValueControlSong({ ...valueControlSong, isPlayingSong: value })
  }

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" marginBottom="8rem" minH="100%">
        <Router>
          <Route exact path="/" component={() => (
            <Home
              valuesSong={valueControlSong}
              favoriteSongs={favoriteSongs.current}
              setFavoriteSongs={handleFavoriteSongs}
              setCurrentSong={handleCurrentSong} />
          )} />
          <Route path="/favorites" component={() => (
            <Favorites
              valuesSong={valueControlSong}
              favoriteSongs={favoriteSongs.current}
              setFavoriteSongs={handleFavoriteSongs}
              setCurrentSong={handleCurrentSong} />
          )} />
        </Router>
      </Container>
      <Reproductor
        isPlayingSong={isPlayingSong}
        setIsPlayingSong={handlePlay}
        volume={volume.current * 100}
        setVolume={setVolumeValue}
        song={currentSong} />
    </ChakraProvider>
  )
}


