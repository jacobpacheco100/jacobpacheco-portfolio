import { extendTheme } from '@chakra-ui/react'
import { buttonStyles as Button } from './components/buttonStyles'

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
      100: '#F7FAFC',
      200: '#E2E8F0',
    },
    text: {
      dark: '#A5A2BE',
      light: '#6F7A88',
    },
    skillBg: '#EAE9FB',
  },
  components: {
    Button,
  },
})

export default theme
