import React from "react";
import { Icon } from "./Icon";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/layout"
import { SongScheme } from "../schemes/Song.scheme";
import { Button, Flex, Image, useColorModeValue } from "@chakra-ui/react"
import { songControl } from "../schemes/layoutParams.type";

type SongType = {
  song: SongScheme,
  valuesSong: songControl,
  setCurrentSong: Function,
  favoriteSongs: Array<SongScheme>,
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
      bgColor={bg}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      wordBreak="break-word"
      w="100%"
      h="min-content"
      transition="box-shadow 250ms ease"
      _hover={{
        boxShadow: `0rem 0rem 0.75rem ${shadowColor}`
      }}>

      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        w="100%"
        onMouseEnter={() => { setIsMouseOver(true) }}
        onMouseLeave={() => { setIsMouseOver(false) }}>

        <Image
          opacity={isMouseOver ? "0.25" : "1"}
          w="100%"
          src={props.song.album.cover}
          fallbackSrc="https://via.placeholder.com/150" />

        {isMouseOver &&
          <Flex
            w="100%"
            justifyContent="space-around"
            alignItems="center"
            position="absolute"
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
              color="white"
              bgColor="green.spotify"
              borderRadius="full"
              w={{ xl: "4rem", md: "4rem", sm: "3rem" }}
              h={{ xl: "4rem", md: "4rem", sm: "3rem" }}
              _hover={{
                transform: "scale(1.15)"
              }}
              _focus={{
                outline: "none"
              }}
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