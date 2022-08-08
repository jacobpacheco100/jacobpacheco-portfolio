import { Heading, Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Box w='100vw' h='723px' bg='black'>
        <Container maxW='container.lg' px={10}>
          <Navbar />
        </Container>
      </Box>
    </div>
  )
}

export default App
