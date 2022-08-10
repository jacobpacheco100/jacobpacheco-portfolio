import {
  Box,
  Heading,
  Text,
  Button,
  Img,
  Link,
  Flex,
  VStack,
} from '@chakra-ui/react'
import react from '../images/icons/skills/react.svg'
import css from '../images/icons/skills/css.svg'
import sass from '../images/icons/skills/sass.svg'
import bootstrap from '../images/icons/skills/bootstrap.svg'
import git from '../images/icons/skills/git.svg'
import adobe from '../images/icons/skills/adobe.svg'
import html from '../images/icons/skills/html.svg'
import js from '../images/icons/skills/js.svg'
import roomSetup from '../images/about/room-setup.jpg'

import { SiTreehouse } from 'react-icons/si'
import { useState } from 'react'

const About = () => {
  const [more, setMore] = useState(false)

  function toggleMore() {
    setMore((prev) => !prev)
  }

  return (
    <Flex
      direction='column'
      w='100%'
      maxW={{ base: 700, md: 830 }}
      pt={{ base: 120 }}
      pb={{ base: 40 }}
      mx={{ base: '0' }}
      position='relative'
      pl={{ base: 0, md: '190px' }}
    >
      <Heading variant='sectionHeading' pt={5}>
        About
        <br />
        Me...
      </Heading>
      <Flex
        direction={{ base: 'row', md: 'column' }}
        mt={12}
        justify='space-between'
        h={{ md: '510px' }}
        maxW={{ base: '100%', md: 680 }}
        position={{ md: 'absolute' }}
        top={20}
        left={'0px'}
      >
        <Img w={{ base: '64px', md: '95px' }} src={react} />
        <Img w={{ base: '64px', md: '95px' }} src={js} />
        <Img w={{ base: '64px', md: '95px' }} src={css} />
        <Img w={{ base: '64px', md: '95px' }} src={html} />
        <Img
          w={{ base: '64px', md: '110px' }}
          display={{ base: 'block', md: 'none' }}
          src={git}
        />
        <Img
          w={{ base: '64px', md: '110px' }}
          display={{ base: 'block', md: 'none' }}
          src={adobe}
        />
      </Flex>
      {/* first text */}
      <Text mt={12} color='text.light'>
        I am a self tought web developer / graphic designer with 3 years of
        client work expirience. My service is developing and or designing
        stylish fully functional responsive websites with strategy in mind for
        growing your business
      </Text>
      {/* setup img */}
      <Box
        maxW={700}
        w='100%'
        h={261}
        mt={12}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundImage={roomSetup}
        rounded={20}
      />
      {more && (
        <Box>
          <Heading mt={20} variant='sectionHeading'>
            Education
          </Heading>
          <Flex mt={12} align='center'>
            <SiTreehouse fontSize={40} color='#5FCF80' />
            <Text color='black' fontWeight='bold' ml={5}>
              Treehouse Techdegree Graduate
            </Text>
            <Link
              display={{ base: 'none', md: 'inline' }}
              textDecor='underline'
              color='primary'
              ml={5}
            >
              learn more
            </Link>
          </Flex>
          <Text mt={10} color='text.light'>
            My web developement journey started when i was 16, i had already
            started little bisnuess as an ameature graphic design freelancer on
            twitter ( my twitter ) and i decided to kick it up a notch and learn
            code. After learning the basics of html and css, i decided to take
            the Treehouse Techdegree course which has been fantastic and would
            recomend to anyone. Of course i studied MDN documentation and watch
            tutorials here and there aswell. Once I learned more advanced Js
            topics like AJAX, local storage, API’s, Array itterations, i decided
            to learn React Js on scrimba and am still actively learning...
          </Text>
          {/* more icons */}
          <VStack position={{ md: 'absolute' }} top={680} spacing={10} left={0}>
            <Img
              w={{ base: '64px', md: '95px' }}
              display={{ base: 'none', md: 'block' }}
              src={bootstrap}
            />
            <Img
              w={{ base: '64px', md: '95px' }}
              display={{ base: 'none', md: 'block' }}
              src={sass}
            />
            <Img
              w={{ base: '64px', md: '95px' }}
              display={{ base: 'none', md: 'block' }}
              src={adobe}
            />
            <Img
              w={{ base: '64px', md: '95px' }}
              display={{ base: 'none', md: 'block' }}
              src={git}
            />
          </VStack>
        </Box>
      )}
      <Button
        alignSelf='flex-end'
        onClick={toggleMore}
        mt={12}
        w={100}
        variant='primary'
      >
        {more ? 'Less' : 'More'}
      </Button>
    </Flex>
  )
}

export default About
