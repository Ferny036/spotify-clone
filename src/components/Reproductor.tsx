import React from 'react'
import Info from './Info'
import Volume from './Volume'
import Controls from './Controls'
import { Flex } from '@chakra-ui/react'
import { SongScheme } from '../schemes/Song.scheme'

type ReproductorParams = {
  song: SongScheme,
  volume: number,
  isPlayingSong: boolean,
  setVolume: Function
  setIsPlayingSong: Function,
}

const Reproductor = ({ song, isPlayingSong, setIsPlayingSong, volume, setVolume }: ReproductorParams) => {
  return (
    <Flex
      w="100%"
      h="7rem"
      left="0"
      right="0"
      bottom="0"
      bgColor="dark.depth_spotify"
      padding="2rem 1rem"
      position="fixed"
      boxShadow="0rem 0rem 0.5rem black"
      alignItems="center"
      justifyContent="space-between" >

      <Info song={song} />
      <Controls isPlayingSong={isPlayingSong} setIsPlayingSong={setIsPlayingSong} />
      <Volume value={volume} setVolumeValue={setVolume} />
    </Flex>
  )
}

export { Reproductor }