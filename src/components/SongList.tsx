import React from "react"
import { Song } from "./Song"
import { Grid } from "@chakra-ui/layout"
import { SongScheme } from "../schemes/Song.scheme"
import { songControl } from "../schemes/layoutParams.type"

type SongListParams = {
  songs: Array<SongScheme>,
  valuesSong: songControl,
  favoriteSongs: Array<SongScheme>,
  setCurrentSong: Function,
  setFavoriteSongs: Function
}

const SongList = (props: SongListParams) => {
  return (
    <>
      <Grid
        gap={8}
        paddingTop="1rem"
        autoFlow="row dense"
        templateColumns={{ xl: "repeat(5, 1fr)", md: "repeat(4, 1fr)", sm: "repeat(3, 1fr)" }} >

        {(props.songs.length > 0) ?
          props.songs.map((e: SongScheme, index: number) =>
            <Song song={e} key={index} {...props} />) :
          <h1>Sin canciones aún!</h1>
        }
      </Grid>
    </>

  )
}

export { SongList }
