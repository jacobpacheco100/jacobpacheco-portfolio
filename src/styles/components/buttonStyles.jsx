import { color } from '@chakra-ui/styled-system'
import { darken, whiten } from '@chakra-ui/theme-tools'

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
        bg: darken('primary', 10),
      },
    },
    socials: {
      bg: '#3A353F',
      color: 'white',
      _hover: {
        bg: whiten('#3A353F', 6),
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
}
