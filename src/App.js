import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import DropMenu from './components/DropMenu'
import About from './components/About'

import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
      <Box as='header' w='100vw' h='723px' bg='black'>
        <Container maxW='container.lg' px={10}>
          <Navbar />
          <DropMenu />
          <Hero />
        </Container>
      </Box>
      <Box as='section' w='100vw' h={{ base: 880, md: 857 }}>
        <Container maxW='container.lg' px={10}>
          <About />
        </Container>
      </Box>
    </div>
  )
}

export default App
