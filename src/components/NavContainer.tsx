import React from 'react'
import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"

const NavContainer = () => {

  const color = useColorModeValue("gray", "white")

  const textConfiguration = {
    fontWeight: "extrabold",
    transition: "text-decoration 0.15s ease-in-out"
  }
  const hoverConfiguration = {
    textDecoration: "underline",
    textDecorationColor: color
  }

  return (
    <Stack
      color="green.spotify"
      spacing="2rem"
      fontSize={{ xl: "5xl", md: "5xl", sm: "5xl" }}
      marginTop="1rem"
      direction={["row"]}
      marginBottom="1rem" >

      <Link to="/" >
        <Text
          {...textConfiguration}
          _hover={{ ...hoverConfiguration }}>
          Home
        </Text>
      </Link>
      <Link to="/favorites" >
        <Text
          {...textConfiguration}
          _hover={{ ...hoverConfiguration }}>
          Favorites
        </Text>
      </Link>
      <Flex
        alignItems="center"
        justifyContent="center">
        <ColorModeSwitcher
          fontSize={{ xl: "4xl", md: "4xl", sm: "3xl" }}
          _hover={{ bgColor: "transparent" }}
          _focus={{ outline: "none" }}
          _active={{ bgColor: "transparent" }}
        />
      </Flex>

    </Stack>
  )
}

export default NavContainer
