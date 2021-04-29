import { Flex } from '@chakra-ui/layout'
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React from 'react'

const Volume = ({ value, setVolumeValue }: { value: number, setVolumeValue: Function }) => {
  return (
    <Flex w="20rem" alignItems="center" justifyContent="flex-end" >
      <Slider
        aria-label="slider-ex-1"
        defaultValue={value}
        w="9rem"
        color="green.spotify"
        onChange={value => setVolumeValue(value)}>
        <SliderTrack>
          <SliderFilledTrack bg="green.spotify" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex >
  )
}

export default Volume