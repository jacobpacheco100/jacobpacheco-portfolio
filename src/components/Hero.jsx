import React from 'react'
import {
  Heading,
  Text,
  Button,
  Box,
  Flex,
  Img,
  HStack,
  Link,
} from '@chakra-ui/react'
import hero from '../images/illustrations/hero.png'
import { AiFillGithub } from 'react-icons/ai'

const Hero = ({ projectsBtn }) => {
  return (
    //424
    <Flex mt={120} justify='space-between' align='center'>
      <Flex
        marginInline='auto'
        direction={'column'}
        textAlign={{ base: '', sm: 'center' }}
        align={{ base: '', sm: 'center' }}
        zIndex={1}
        maxW={{ base: 350, md: 900 }}
      >
        <Heading
          fontSize='48px'
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

        <Text
          m='20px 0 40px 0'
          color='text.dark'
          maxW={424}
          marginInline='auto'
        >
          Welcome! I specialize in designing and developing high quality web
          applications
        </Text>
        <HStack spacing={4}>
          <Button
            as={Link}
            href='https://github.com/JacobPacheco100'
            border='1px solid #69666C'
            h={50}
            px={3}
            bg={'grayLight'}
            _hover={{ bg: 'grayHV' }}
          >
            <AiFillGithub color='white' fontSize={32} />
          </Button>
          <Button onClick={projectsBtn} h={50} variant='primary'>
            My Projects
          </Button>
        </HStack>
      </Flex>
      <Img
        src={hero}
        alt='logo'
        pos='absolute'
        left={0}
        right={0}
        margin='0 auto'
      />
    </Flex>
  )
}

export default Hero
