import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import DropMenu from './components/DropMenu'
import { useState } from 'react'

function App() {
  return (
    <div className='App'>
      <Box w='100vw' h='723px' bg='black'>
        <Container maxW='container.lg' px={10}>
          <Navbar />
          <DropMenu />
        </Container>
      </Box>
    </div>
  )
}

export default App
