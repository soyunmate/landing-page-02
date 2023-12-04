import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: {
          light: 'dark.500',
          dark: 'dark.50',
        },
      },
    },
  },
  // Colors
  colors: {
    primary: {
      50: '#e4fce9',
      100: '#bff1ca',
      200: '#98e5a9',
      300: '#71db88',
      400: '#4ad167',
      500: '#31b74d',
      600: '#248e3b',
      700: '#186629',
      800: '#093d17',
      900: '#001602',
    },
    secondary: {
      50: '#ddfdf8',
      100: '#baf2e8',
      200: '#94e7d8',
      300: '#6cdcc9',
      400: '#46d2b9',
      500: '#2db9a0',
      600: '#1e907c',
      700: '#106759',
      800: '#013f35',
      900: '#001812',
    },
    light: {
      50: '#f8ffe5',
      100: '#ebfeb8',
      200: '#dffe88',
      300: '#d2fe59',
      400: '#c5fe34',
      500: '#ace526',
      600: '#85b21c',
      700: '#607f12',
      800: '#3a4d07',
      900: '#131a00',
    },
    lightdark: {
      50: '#ebf6eb',
      100: '#d2ded4',
      200: '#b7c6ba',
      300: '#9caf9f',
      400: '#819985',
      500: '#677f6b',
      600: '#506353',
      700: '#38473a',
      800: '#202b21',
      900: '#021107',
    },
    lightneutral: {
      50: '#e3fee9',
      100: '#baf7c8',
      200: '#8fefa5',
      300: '#65e982',
      400: '#3ce360',
      500: '#24c946',
      600: '#1a9c36',
      700: '#107026',
      800: '#044315',
      900: '#001803',
    },
    dark: {
      50: '#faf1e8',
      100: '#e0d8d0',
      200: '#c9bdb6',
      300: '#b2a39a',
      400: '#9b897e',
      500: '#816f64',
      600: '#65574d',
      700: '#493e36',
      800: '#2e251f',
      900: '#170904',
    },
  },
  fonts: {
    test: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
})

export default theme
