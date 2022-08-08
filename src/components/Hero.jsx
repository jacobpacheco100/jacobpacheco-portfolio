import React from 'react'
import { Heading, Text, Button, Box, Flex, Img } from '@chakra-ui/react'
import hero from '../images/illustrations/hero.png'

const Hero = () => {
  return (
    //424
    <Flex mt={100} justify='space-between' align='center'>
      <Box maxW={{ base: 350, md: 900 }} pr={5}>
        <Heading
          fontSize='48px'
          maxW={{ base: 300, md: 400 }}
          color='white'
          lineHeight={{ base: 0.9, md: 1.2 }}
        >
          Jacob Pacheco
        </Heading>
        <Heading
          fontSize='48px'
          color='primary'
          maxW={{ base: '', md: 600 }}
          lineHeight={{ base: 0.9, lg: 1.2 }}
        >
          Junior React Developer.
        </Heading>

        <Text m='20px 0 40px 0' color='text.dark' maxW={424}>
          Welcome! I specialize in designing and developing high quality web
          applications
        </Text>
        <Button variant='primary'>Continue</Button>
      </Box>
      <Img src={hero} maxW={600} display={{ base: 'none', md: 'block' }} />
    </Flex>
  )
}

export default Hero
