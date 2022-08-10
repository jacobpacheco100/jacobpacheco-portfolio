import { Box, Container, Text, Heading } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import DropMenu from './components/DropMenu'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import { useRef } from 'react'

import Hero from './components/Hero'

function App() {
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div className='App'>
      {/* header */}
      <Box as='header' w='100vw' h='723px' bg='black'>
        <Container>
          <Navbar
            about={() => scrollToSection(about)}
            projects={() => scrollToSection(projects)}
            contact={() => scrollToSection(contact)}
          />
          <DropMenu />
          <Hero continueBtn={() => scrollToSection(about)} />
        </Container>
      </Box>

      {/* about */}
      <Box ref={about} as='section' w='100vw' minH={{ base: 880, md: 857 }}>
        <Container>
          <About />
        </Container>
      </Box>
      {/* projects */}
      <Box ref={projects} as='section' w='100vw' py={40} bg='bg.100'>
        <Container>
          <Projects />
        </Container>
      </Box>
      {/* contact */}
      <Box ref={contact} as='section' w='100vw' py={40} bg='bg.200'>
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
