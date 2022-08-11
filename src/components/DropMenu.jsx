import { Flex, VStack, Img, Link, Container, Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import IconGroup from './IconGroup'

const DropMenu = ({ about, projects, contact }) => {
  const [menu, setMunu] = useState(false)

  function toggleMenu() {
    setMunu((prev) => !prev)
  }
  return (
    <Flex
      display={{ base: 'flex', md: 'none' }}
      h='100px'
      align='center'
      justify='space-between'
    >
      <HamburgerIcon
        onClick={toggleMenu}
        _hover={{ cursor: 'pointer' }}
        zIndex={3}
        color='white'
        fontSize={30}
      />
      {menu && (
        <Flex
          position={'fixed'}
          pt='100px'
          zIndex={2}
          bg='primary'
          w='74vw'
          h='100vh'
          top={0}
          left={0}
          direction='column'
        >
          <Container maxW='container.lg' px={10}>
            <VStack
              w='100%'
              spacing='30px'
              fontWeight='medium'
              color='white'
              textTransform='uppercase'
              onClick={toggleMenu}
            >
              <Link
                onClick={about}
                variant='menuLink'
                pb={7}
                borderBottom='1px solid #9289FF'
                w='100%'
                textAlign='center'
              >
                about
              </Link>
              <Link
                onClick={projects}
                variant='menuLink'
                pb={7}
                borderBottom='1px solid #9289FF'
                w='100%'
                textAlign='center'
              >
                Projects
              </Link>
              <Link
                onClick={contact}
                variant='menuLink'
                pb={7}
                borderBottom='1px solid #9289FF'
                w='100%'
                textAlign='center'
              >
                Contact
              </Link>
            </VStack>

            <Flex h='46vh' align='center' justify='center'>
              <IconGroup
                spacing={5}
                direction='column'
                color='white'
                bg='#400A77'
                colorHV='white'
                bgHV='primary'
                border='red'
              />
            </Flex>
          </Container>
        </Flex>
      )}
    </Flex>
  )
}

export default DropMenu
