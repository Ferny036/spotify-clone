import React from 'react'
import { Icon } from './Icon'
import { Button } from '@chakra-ui/react'

const Controls = ({ isPlayingSong, setIsPlayingSong }: { isPlayingSong: boolean, setIsPlayingSong: Function }) => {
  return (
    <>
      <Button
        textAlign="center"
        bgColor="green.spotify"
        color="white"
        borderRadius="full"
        w="3rem"
        h="3rem"
        _hover={{
          bgColor: "grey"
        }}
        _focus={{ outline: "none" }}
        _active={{ bgColor: "grey" }}
        onClick={() => setIsPlayingSong(!isPlayingSong)} >

        <Icon icon={isPlayingSong ? "fa-pause" : "fa-play"} />
      </Button>

    </>
  )
}

export default Controls
