import { Flex } from '@chakra-ui/react'
import React from 'react'
import { SongScheme } from '../schemes/Song.scheme'
import Controls from './Controls'
import Info from './Info'
import Volume from './Volume'

type ReproductorParams = {
  volume: number,
  song: SongScheme,
  isPlayingSong: boolean,
  setIsPlayingSong: Function,
  setVolume: Function
}

const Reproductor = ({ song, isPlayingSong, setIsPlayingSong, volume, setVolume }: ReproductorParams) => {
  return (
    <Flex
      boxShadow="0rem 0rem 0.5rem black"
      position="fixed"
      alignItems="center"
      justifyContent="space-between"
      bottom="0"
      left="0"
      right="0"
      width="100%"
      padding="2rem 1rem"
      height="7rem"
      bgColor="dark.depth_spotify" >

      <Info song={song} />
      <Controls isPlayingSong={isPlayingSong} setIsPlayingSong={setIsPlayingSong} />
      <Volume value={volume} setVolumeValue={setVolume} />
    </Flex>
  )
}

export { Reproductor }