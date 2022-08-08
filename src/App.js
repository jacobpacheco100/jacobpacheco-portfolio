import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import DropMenu from './components/DropMenu'
import Header from './components/Hero'
import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
      <Box w='100vw' h='723px' bg='black'>
        <Container maxW='container.lg' px={10}>
          <Navbar />
          <DropMenu />
          <Hero />
        </Container>
      </Box>
    </div>
  )
}

export default App
