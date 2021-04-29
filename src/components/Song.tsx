import React from "react";
import { Icon } from "./Icon";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/layout"
import { SongScheme } from "../schemes/Song.scheme";
import { songControl } from "../schemes/layoutParams.type";
import { Button, Flex, Image, useColorModeValue } from "@chakra-ui/react"

type SongType = {
  song: SongScheme,
  valuesSong: songControl,
  favoriteSongs: Array<SongScheme>,
  setCurrentSong: Function,
  setFavoriteSongs: Function
}

const Song = (props: SongType) => {

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isFavoriteSong, setIsFavoriteSong] = useState(props.favoriteSongs.some(item => item.id === props.song.id))

  const bg = useColorModeValue("white", "dark.spotify")
  const color = useColorModeValue("dark.spotify", "white")
  const shadowColor = useColorModeValue("grey", "black")

  const lateralButtonsConfig = {
    color: color,
    padding: "0",
    bgColor: "transparent",
    fontSize: { xl: "1.5rem", md: "1.2rem", sm: "1rem" }
  }

  const { isPlayingSong, currentSong } = props.valuesSong

  return (
    <Flex
      w="100%"
      h="min-content"
      bgColor={bg}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      wordBreak="break-word"
      transition="box-shadow 250ms ease"
      _hover={{
        boxShadow: `0rem 0rem 0.75rem ${shadowColor}`
      }}>

      <Flex
        w="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
        onMouseEnter={() => { setIsMouseOver(true) }}
        onMouseLeave={() => { setIsMouseOver(false) }}>

        <Image
          w="100%"
          opacity={isMouseOver ? "0.25" : "1"}
          src={props.song.album.cover}
          fallbackSrc="https://via.placeholder.com/150" />

        {isMouseOver &&
          <Flex
            w="100%"
            position="absolute"
            justifyContent="space-around"
            alignItems="center"
            fontSize={{ xl: "1.5rem", md: "1rem", sm: "1rem" }}>
            <Button
              {...lateralButtonsConfig}
              _hover={{ bgColor: "transparent" }}
              _focus={{ outline: "none" }}
              _active={{ bgColor: "transparent" }}
              onClick={() => {
                props.setFavoriteSongs(props.song)
                setIsFavoriteSong(!isFavoriteSong)
              }} >
              <Icon
                icon="fa-heart"
                prefix={isFavoriteSong ? "fa" : "far"} />
            </Button>
            <Button
              w={{ xl: "4rem", md: "4rem", sm: "3rem" }}
              h={{ xl: "4rem", md: "4rem", sm: "3rem" }}
              color="white"
              bgColor="green.spotify"
              borderRadius="full"
              _hover={{ transform: "scale(1.15)" }}
              _focus={{ outline: "none" }}
              onClick={() => props.setCurrentSong(props.song)}>

              <Icon icon={isPlayingSong && currentSong.id === props.song.id ? "fa-pause" : "fa-play"} />
            </Button>
            <Button
              {...lateralButtonsConfig}
              _hover={{ bgColor: "transparent" }}
              _focus={{ outline: "none" }}
              _active={{ bgColor: "transparent" }}>
              <Icon icon="fa-ellipsis-h" />
            </Button>
          </Flex>
        }


      </Flex>
      <Box w="100%" paddingY="0.5rem" paddingLeft="0.5rem" color={color}>
        <Text fontSize="md" fontWeight="bold" >{props.song.title}</Text>
        <Text fontSize="md" >{"by: " + props.song.artist.name}</Text>
      </Box>


    </Flex>
  );
}

export { Song }