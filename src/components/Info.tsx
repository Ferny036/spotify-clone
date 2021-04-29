import { Image } from '@chakra-ui/image'
import { Grid, GridItem, Text } from '@chakra-ui/layout'
import React from 'react'
import { SongScheme } from '../schemes/Song.scheme'

const Info = ({ song }: { song: SongScheme }) => {
  return (
    <Grid
      templateColumns="repeat(2, auto)"
      templateRows="repeat(2, auto)"
      w="20rem"
      justifyContent="flex-start"
      gap={2}
      color="white">

      <GridItem rowSpan={2} colSpan={1} alignSelf="center" >
        <Image
          w="3.5rem"
          h="3.5rem"
          src={song.album?.cover ?? ""}
          fallbackSrc="https://via.placeholder.com/150" />
      </GridItem>
      <GridItem
        colSpan={1}
        alignSelf="flex-end"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap">
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
