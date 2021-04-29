import React from 'react'
import useAxios from "../hooks/useAxios"
import NavContainer from './NavContainer';
import useLocalStorage from '../hooks/useLocalStorage';
import { Icon } from './Icon';
import { Input } from '@chakra-ui/input';
import { SongList } from "./SongList";
import { SongScheme } from '../schemes/Song.scheme';
import { layoutParams } from '../schemes/layoutParams.type';
import { TemplateLayout } from './TemplateLayout';
import { useEffect, useState } from 'react'
import { Box, Button, InputGroup, InputRightElement } from '@chakra-ui/react';

export const Home = (props: layoutParams) => {

  const [currentSongs, setCurrentSongs] = useState<Array<SongScheme>>([])
  const [currentSearch, setCurrentSearch] = useState("")
  const { getValues, saveValues } = useLocalStorage()
  const { getAxiosByQuery } = useAxios("https://deezerdevs-deezer.p.rapidapi.com");

  useEffect(() => {
    const result = getValues("currentSearch");
    setCurrentSearch(result[0] ?? "")
    setCurrentSongs(result[1] ?? [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = () => {
    getAxiosByQuery("/search", { q: currentSearch }).then(res => {
      saveValues("currentSearch", [currentSearch, res.data])
      setCurrentSongs(res.data ?? [])
    })
  }

  return (
    <>
      <NavContainer />
      <Box w={{ xl: "40rem", md: "25rem", sm: "15rem" }} >
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            bgColor="white"
            color="dark.depth_spotify"
            fontWeight="bold"
            placeholder="Search..."
            _placeholder={{
              color: "dark.spotify",
              opacity: "0.55"
            }}
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)} />

          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              fontWeight="bold"
              color="dark.depth_spotify"
              bgColor="transparent"
              _hover={{
                bgColor: "transparent"
              }}

              onClick={() => handleSearch()}>
              <Icon icon="fa-search" />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      { currentSongs.length > 0
        ? <SongList songs={currentSongs} {...props} />
        : <TemplateLayout text="Start searching your favorite songs!!!" />}
    </>
  )
}
