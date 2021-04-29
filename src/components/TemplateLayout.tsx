import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { Icon } from './Icon'

const TemplateLayout = (props: { text: string }) => {
  return (
    <>
      <Box
        w="100%"
        h="auto"
        padding="1rem"
        marginY="1rem"
        bgColor="green.spotify"
        color="white"
        fontWeight="bold" >
        <Text>
          <Icon prefix="fas" icon="fa-question-circle" /> {props.text}
        </Text>
      </Box>
    </>
  )
}

export { TemplateLayout }
