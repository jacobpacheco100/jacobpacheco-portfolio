import { extendTheme } from '@chakra-ui/react'
import { buttonStyles as Button } from './components/buttonStyles'
import { linkStyles as Link } from './components/linkStyles'
import { containerStyles as Container } from './components/containerStyles'
import { headingStyles as Heading } from './components/headingStyles'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'text.dark',
        lineHeight: '1.8',
      },
      p: {
        fontSize: 18,
        fontWeight: 'light',
      },
    },
  },
  colors: {
    primary: '#5F52F4',
    black: '#17131B',
    bg: {
      100: '#F8F7FC',
      200: '#E2E3F0',
    },
    text: {
      dark: '#A5A2BE',
      light: '#6F7A88',
    },
    skillBg: '#EAE9FB',
  },
  components: {
    Button,
    Link,
    Container,
    Heading,
  },
})

export default theme