import React from 'react'
import { Heading, Text, Button, Box, Flex, Img } from '@chakra-ui/react'
import hero from '../images/illustrations/hero.svg'

const Hero = () => {
  return (
    <Flex mt={130} justify='space-between' align='center'>
      <Box maxW={{ base: 350, md: 424 }} pr={5}>
        <Heading fontSize='40px' maxW={{ base: 200, md: 400 }} color='white'>
          Jacob Pacheco
        </Heading>
        <Text m='20px 0 40px 0' color='text.dark'>
          Welcome! Im a frontend React developer. speacializing in programing
          and designing modern, effiicient web Applications
        </Text>
        <Button bg='primary' color='white'>
          Continue
        </Button>
      </Box>
      <Img display={{ base: 'none', md: 'block' }} src={hero} />
    </Flex>
  )
}

export default Hero
