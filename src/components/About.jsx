import { Flex, Box, Heading, Text, Button, Img, Grid } from '@chakra-ui/react'
import react from '../images/icons/skills/react.svg'
import css from '../images/icons/skills/css.svg'
import sass from '../images/icons/skills/sass.svg'
import bootstrap from '../images/icons/skills/bootstrap.svg'
import git from '../images/icons/skills/git.svg'
import adobe from '../images/icons/skills/adobe.svg'
import { useState } from 'react'

const About = () => {
  const [more, setMore] = useState(false)

  function toggleMore() {
    setMore((prev) => !prev)
  }

  return (
    <Box
      maxW={{ base: 380, md: 580 }}
      pt={{ base: 120, md: 200 }}
      pb={{ base: 40 }}
      mx={{ base: '0', md: 'auto' }}
    >
      <Heading variant='sectionHeading' ml={{ base: 0, md: '-40px' }}>
        About
        <br />
        Me...
      </Heading>
      <Grid
        mt={12}
        maxW={{ base: 303, md: 580 }}
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
        gap={{ base: '15px 0px', md: '20px' }}
      >
        <Img src={react} />
        <Img src={css} />
        <Img src={sass} />
        <Img src={bootstrap} />
        <Img src={git} />
        <Img src={adobe} />
      </Grid>
      <Text mt={12} color='text.light'>
        I am a self tought web developer / graphic designer with 3 years of
        client work expirience. My service is developing and or designing
        stylish fully functional responsive websites with strategy in mind for
        growing your business
      </Text>
      {more && (
        <Text mt={10} color='text.light'>
          My frontend dev journey began when I was 15 years old. I wanted to
          make some money as a kid so I looked around the Internet for ways to
          do just that. Something that lets me be creative I thought. I looked
          into graphic design and discovered a whole community of low rate
          freelance designers on twitter. I decided that was a good place to
          start. After learning the basics of photoshop, I actually offered my
          work for free to build a following since I didn't think my work was
          good enough to sell yet. To my surprise, I picked up a decent
          following pretty quickly, and ended up having more clients than I knew
          what to do with. That's when I started selling, and when it all
          began.show less
        </Text>
      )}
      <Button onClick={toggleMore} mt={12} w={100} variant='primary'>
        {more ? 'Less' : 'More'}
      </Button>
    </Box>
  )
}

export default About
