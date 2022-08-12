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
      <Box as='header' w='100vw' h='723px' bg='black' pos='relative'>
        {/* bg gradients */}
        <div
          style={{
            zIndex: 0,
            position: 'absolute',
            width: '714px',
            height: '715px',
            left: '0',
            bottom: '-380px',
            filter: 'blur(438px)',
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(121, 7, 236, 0.6) 0%, rgba(22, 15, 30, 0.6) 100%)',
            filter: 'blur(438px)',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            width: '589px',
            height: '590px',
            left: '738px',
            top: '-437px',
            background:
              'radial-gradient(50% 50% at 50% 50%, #7B88FF 0%, #160F1E 100%)',
            filter: 'blur(438px)',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            width: '714px',
            height: '715px',
            left: '1063px',
            top: '522px',

            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 184, 0.6) 0%, rgba(22, 15, 30, 0.6) 100%)',
            filter: 'blur(438px)',
          }}
        ></div>
        {/* content */}
        <Container>
          <Navbar
            about={() => scrollToSection(about)}
            projects={() => scrollToSection(projects)}
            contact={() => scrollToSection(contact)}
          />
          <DropMenu
            about={() => scrollToSection(about)}
            projects={() => scrollToSection(projects)}
            contact={() => scrollToSection(contact)}
          />
          <Hero continueBtn={() => scrollToSection(about)} />
        </Container>
      </Box>

      {/* about */}
      <Box
        ref={about}
        as='section'
        w='100vw'
        minH={{ base: 880, md: 857 }}
        bg='white'
        pos='absolute'
      >
        <Container>
          <About />
        </Container>
      </Box>
      {/* projects */}
      <Box
        ref={projects}
        mt={{ base: 1000, md: 857 }}
        as='section'
        w='100vw'
        py={40}
        bg='bg.100'
      >
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
          © 2022-2022 Jacob Pacheco. All Rights Reserved.
        </Text>
      </Box>
    </div>
  )
}

export default App
