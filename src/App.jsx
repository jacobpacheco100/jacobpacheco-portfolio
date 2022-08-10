import { Box, Container, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import DropMenu from './components/DropMenu'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
      {/* header */}
      <Box as='header' w='100vw' h='723px' bg='black'>
        <Container>
          <Navbar />
          <DropMenu />
          <Hero />
        </Container>
      </Box>
      {/* about */}
      <Box as='section' w='100vw' minH={{ base: 880, md: 857 }}>
        <Container>
          <About />
        </Container>
      </Box>
      {/* projects */}
      <Box as='section' w='100vw' py={40} bg='bg.100'>
        <Container>
          <Projects />
        </Container>
      </Box>
      {/* contact */}
      <Box as='section' w='100vw' py={40} bg='bg.200'>
        <Container>
          <Contact />
        </Container>
      </Box>
      {/* footer */}
      <Box as='footer' w='100vw' py={7} bg='black'>
        <Text textAlign='center' fontWeight={400} fontSize={14}>
          © 2000-2022 Jacob Pacheco. All Rights Reserved.
        </Text>
      </Box>
    </div>
  )
}

export default App