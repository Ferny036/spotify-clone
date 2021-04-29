import React from "react"
import { Song } from "./Song"
import { Grid } from "@chakra-ui/layout"
import { SongScheme } from "../schemes/Song.scheme"
import { songControl } from "../schemes/layoutParams.type"

type SongListParams = {
  songs: Array<SongScheme>,
  valuesSong: songControl,
  setCurrentSong: Function,
  favoriteSongs: Array<SongScheme>,
  setFavoriteSongs: Function
}

const SongList = (props: SongListParams) => {
  return (
    <>
      <Grid
        templateColumns={{ xl: "repeat(5, 1fr)", md: "repeat(4, 1fr)", sm: "repeat(3, 1fr)" }}
        gap={8}
        autoFlow="row dense"
        paddingTop="1rem">

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
