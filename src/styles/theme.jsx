import { extendTheme } from '@chakra-ui/react'
import { buttonStyles as Button } from './components/buttonStyles'
import { linkStyles as Link } from './components/linkStyles'
import { containerStyles as Container } from './components/containerStyles'
import { headingStyles as Heading } from './components/headingStyles'
import { imgStyles as Img } from './components/imgStyles'

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
    primary: '#7F00FE',
    black: '#160F1E',
    bg: {
      100: '#F7F8FC',
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
    Img,
  },
})

export default theme
