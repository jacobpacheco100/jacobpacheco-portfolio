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

const Hero = ({ continueBtn }) => {
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
          <Button onClick={continueBtn} h={50} variant='primary'>
            Continue
          </Button>
        </HStack>
      </Box>
      <Img src={hero} display={{ base: 'none', md: 'inline' }} />
    </Flex>
  )
}

export default Hero
