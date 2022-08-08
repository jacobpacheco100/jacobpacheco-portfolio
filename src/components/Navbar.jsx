import {
  Heading,
  Box,
  Container,
  Flex,
  Img,
  HStack,
  Link,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <Flex
      h='80px'
      justify={{ base: 'center', md: 'space-between' }}
      align='center'
    >
      <HamburgerIcon
        color='white'
        fontSize={30}
        display={{ base: 'block', md: 'none' }}
      />

      <Img src={logo} display={{ base: 'none', md: 'block' }} />
      <HStack
        spacing={10}
        color='white'
        fontWeight='medium'
        display={{ base: 'none', md: 'block' }}
      >
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
        <Button color='white' bg='#3A353F'>
          Socials
          <ChevronDownIcon ml={2} />
        </Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
