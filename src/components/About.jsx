import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  Img,
  Link,
  Flex,
  VStack,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react'
import roomSetup from '../images/about/room-setup.jpg'

import { SiTreehouse } from 'react-icons/si'

import { DiReact, DiCss3Full, DiJavascript1, DiSass } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiTailwindcss, SiBootstrap, SiChakraui } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'

const About = () => {
  const [more, setMore] = useState(false)

  function toggleMore() {
    setMore((prev) => !prev)
  }

  return (
    <Flex
      justify={'space-between'}
      pt={{ base: 20, md: 120 }}
      pb={{ base: 20, md: 40 }}
    >
      <Flex
        direction='column'
        w='100%'
        maxW={{ base: 700, md: 720 }}
        position='relative'
      >
        <Heading variant='sectionHeading' color={'#3d404a'}>
          About
          <br />
          Me...
        </Heading>

        {/* first text */}
        <Text mt={12} color='text.light'>
          My name is Jacob Pacheco, im a junior frontend web developer and a
          Treehouse Techdegree graduate. I develope functional, modern, and
          maintainable websites, Im especially proefficient in accurately
          replicating designs / mockups into code
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
            <Heading mt={20} variant='sectionHeading' color={'#50505c'}>
              Education
            </Heading>
            <Flex mt={12} align='center'>
              <SiTreehouse fontSize={40} color='#5FCF80' />
              <Text
                color='#50505c'
                fontWeight='bold'
                ml={5}
                fontSize={{ base: 15, sm: 17 }}
              >
                Treehouse Techdegree Graduate
              </Text>
              <Link
                target={'_blank'}
                href='https://teamtreehouse.com/profiles/jacobpacheco3'
                display={{ base: 'none', md: 'inline' }}
                textDecor='underline'
                color='primary'
                ml={5}
              >
                learn more
              </Link>
            </Flex>
            <Text mt={10} color='text.light'>
              My web developement journey started when I was 16, I had already
              started little bisnuess as an ameature graphic design freelancer
              on twitter ( my twitter ) and i decided to kick it up a notch and
              learn code. After learning the basics of html and css, I decided
              to take the Treehouse Techdegree course, which has been a
              fantastic experience. I studied deeply into MDN documentation and
              watch tutorials here and there aswell. Once I learned more
              advanced Js topics like AJAX, local storage, API’s, Array
              itterations, I decided to learn React Js on scrimba and am still
              actively learning. This portfolio would actually be my first React
              site...
            </Text>
            {/* mobile skills */}
            <Grid
              display={{ base: 'grid', xl: 'none' }}
              templateColumns='1fr 1fr'
              h={537}
              w={'100%'}
              mt={20}
              gap={5}
            >
              {/* react */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <DiReact fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={{ base: 15 }} fontWeight='bold'>
                    React JS
                  </Text>
                </HStack>
              </Flex>

              {/* javascript */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <DiJavascript1 fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    ES6
                  </Text>
                </HStack>
              </Flex>

              {/* html */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <AiFillHtml5 fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    HTML
                  </Text>
                </HStack>
              </Flex>

              {/* css */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <DiCss3Full fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    CSS
                  </Text>
                </HStack>
              </Flex>

              {/* tailwind */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <SiTailwindcss fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    Tailwind
                  </Text>
                </HStack>
              </Flex>

              {/* Bootstrap */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <SiBootstrap fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    Bootstrap
                  </Text>
                </HStack>
              </Flex>

              {/* Sass */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <DiSass fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    Sass
                  </Text>
                </HStack>
              </Flex>

              {/* Chakra UI */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <SiChakraui fontSize={25} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    Chakra UI
                  </Text>
                </HStack>
              </Flex>

              {/* Git */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <FaGitAlt fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    Git
                  </Text>
                </HStack>
              </Flex>

              {/* Figma */}
              <Flex
                color='black'
                justify={'center'}
                h={85}
                border={'2px solid #EAE9FB'}
                rounded={8}
                bg={'#F6F5FF'}
              >
                <HStack>
                  <FiFigma fontSize={28} color={'#7F00FE'} />
                  <Text fontSize={15} fontWeight='bold'>
                    Figma
                  </Text>
                </HStack>
              </Flex>
            </Grid>
          </Box>
        )}
        <Button
          onClick={toggleMore}
          mt={{ base: 10 }}
          w={100}
          variant='plusInfo'
        >
          {more ? 'Less' : 'More'}
        </Button>
      </Flex>

      <Grid
        display={{ base: 'none', xl: 'grid' }}
        templateColumns='1fr 1fr'
        h={537}
        w={400}
        gap={10}
      >
        {/* react */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <DiReact fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              React JS
            </Text>
          </HStack>
        </Flex>

        {/* javascript */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <DiJavascript1 fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Javascript
            </Text>
          </HStack>
        </Flex>

        {/* html */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <AiFillHtml5 fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              HTML
            </Text>
          </HStack>
        </Flex>

        {/* css */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <DiCss3Full fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              CSS
            </Text>
          </HStack>
        </Flex>

        {/* tailwind */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <SiTailwindcss fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Tailwind
            </Text>
          </HStack>
        </Flex>

        {/* Bootstrap */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <SiBootstrap fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Bootstrap
            </Text>
          </HStack>
        </Flex>

        {/* Sass */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <DiSass fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Sass
            </Text>
          </HStack>
        </Flex>

        {/* Chakra UI */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <SiChakraui fontSize={25} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Chakra UI
            </Text>
          </HStack>
        </Flex>

        {/* Git */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <FaGitAlt fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Git
            </Text>
          </HStack>
        </Flex>

        {/* Figma */}
        <Flex
          color='black'
          justify={'center'}
          h={85}
          border={'2px solid #EAE9FB'}
          rounded={8}
          bg={'#F6F5FF'}
        >
          <HStack>
            <FiFigma fontSize={28} color={'#7F00FE'} />
            <Text fontSize={17} fontWeight='bold'>
              Figma
            </Text>
          </HStack>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default About
