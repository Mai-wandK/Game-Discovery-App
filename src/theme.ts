// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
}

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100:'#ededed',
      200:'#b3b3b3',
      300:'#a0a0a0',
      400:'#898989',
      500:'#6c6c6',
      600:'#202020',
      700:'#121212',
      800:'#111'
    },
  },



})

export default theme;
