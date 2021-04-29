import React from 'react'
import { Icon } from './Icon'
import { Button } from '@chakra-ui/react'

type ControlsParams = {
  isPlayingSong: boolean,
  setIsPlayingSong: Function
}
const Controls = ({ isPlayingSong, setIsPlayingSong }: ControlsParams) => {
  return (
    <>
      <Button
        w="3rem"
        h="3rem"
        color="white"
        textAlign="center"
        borderRadius="full"
        bgColor="green.spotify"
        _hover={{ bgColor: "grey" }}
        _focus={{ outline: "none" }}
        _active={{ bgColor: "grey" }}
        onClick={() => setIsPlayingSong(!isPlayingSong)} >
        <Icon icon={isPlayingSong ? "fa-pause" : "fa-play"} />
      </Button>
    </>
  )
}

export default Controls
