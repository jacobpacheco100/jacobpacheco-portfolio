import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import DropMenu from './components/DropMenu'
import About from './components/About'
import Projects from './components/Projects'

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
    </div>
  )
}

export default App
