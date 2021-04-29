import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react";


const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'white')(props),
      bg: mode('white', 'dark.spotify')(props),
    },
  }),
};

const themeConfig = () => extendTheme({
  colors: {
    green: {
      spotify: "#2BD976"
    },
    dark: {
      depth_spotify: "#1E1D25",
      spotify: "#22202B"
    },
    grey: {
      spotify: "#626469"
    },
  },
  styles
})

export { themeConfig }