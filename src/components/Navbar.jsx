import { Flex, Img, HStack, Link, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      h='80px'
      justify='space-between'
      align='center'
    >
      <Img src={logo} />
      <HStack spacing={10} color='white' fontWeight='medium'>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
        <Button color='white' bg='#3A353F' rightIcon={<ChevronDownIcon />}>
          Socials
        </Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
