import { whiten } from '@chakra-ui/theme-tools'

export const buttonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: 'primary',
      color: 'white',
      px: 6,
      _hover: {
        bg: '#6B00D7',
      },
    },
    socials: {
      bg: '#3A353F',
      color: 'white',
      _hover: {
        bg: whiten('#3A353F', 6),
      },
    },
    plusInfo: {
      bg: 'white',
      border: '1px solid black',
      color: 'black',
      _hover: {
        bg: 'bg.100',
      },
      _active: {
        bg: 'bg.100',
      },
    },
    projectSite: {
      bg: 'primary',
      py: 6,
      w: 128,
      _hover: {
        bg: '#6B00D7',
      },
    },
    projectRepo: {
      bg: 'black',
      py: 6,
      _hover: {
        bg: whiten('#3A353F', 8),
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
}
