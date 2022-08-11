import { Flex, Img, HStack, Link, Button, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../images/logo.svg'
import About from './About'
import IconGroup from './IconGroup'
import { useState } from 'react'

const Navbar = ({ about, projects, contact }) => {
  const [socials, setSocials] = useState(false)

  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      h='100px'
      justify='space-between'
      align='center'
      position='relative'
    >
      <Img src={logo} />
      <HStack spacing={10} color='white' fontWeight='medium'>
        <Link onClick={about}>About</Link>
        <Link onClick={projects}>Projects</Link>
        <Link onClick={contact}>Contact</Link>
        <Button
          onClick={() => setSocials((prev) => !prev)}
          variant='socials'
          rightIcon={<ChevronDownIcon />}
        >
          Socials
        </Button>
        {socials && (
          <Box pos='absolute' bottom={-10} right={0}>
            <IconGroup
              spacing={5}
              direction='row'
              color='primary'
              bg='grayHV'
              border='#69666C'
              bgHV='gray'
              colorHV='white'
            />
          </Box>
        )}
      </HStack>
    </Flex>
  )
}

export default Navbar
