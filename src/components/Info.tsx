import React from 'react'
import { Image } from '@chakra-ui/image'
import { SongScheme } from '../schemes/Song.scheme'
import { Grid, GridItem, Text } from '@chakra-ui/layout'

type InfoParams = {
  song: SongScheme
}
const Info = ({ song }: InfoParams) => {
  return (
    <Grid
      w="20rem"
      gap={2}
      color="white"
      templateRows="repeat(2, auto)"
      justifyContent="flex-start"
      templateColumns="repeat(2, auto)" >

      <GridItem rowSpan={2} colSpan={1} alignSelf="center" >
        <Image
          w="3.5rem"
          h="3.5rem"
          src={song.album?.cover ?? ""}
          fallbackSrc="https://via.placeholder.com/150" />
      </GridItem>
      <GridItem
        colSpan={1}
        overflow="hidden"
        whiteSpace="nowrap"
        alignSelf="flex-end"
        textOverflow="ellipsis" >
        <Text fontSize="sm" fontWeight="bold">
          {song.title ?? "Title"}
        </Text>
      </GridItem>
      <GridItem colSpan={1} alignSelf="flex-start" >
        <Text fontSize="sm" >
          {song.artist?.name ?? "Artist"}
        </Text>
      </GridItem>
    </Grid>
  )
}

export default Info
