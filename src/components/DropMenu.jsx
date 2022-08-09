import { Flex, VStack, Img, Link, Container } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const DropMenu = () => {
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
        zIndex={3}
        color='white'
        fontSize={30}
      />
      {menu && (
        <Flex
          pt={150}
          zIndex={2}
          bg='primary'
          w='74vw'
          h='100vh'
          pos='absolute'
          top={0}
          left={0}
          direction='column'
        >
          <Container maxW='container.lg' px={10}>
            <VStack
              w='100%'
              spacing='60px'
              fontWeight='medium'
              color='white'
              textTransform='uppercase'
            >
              <Link
                variant='menuLink'
                pb={7}
                borderBottom='1px solid #9289FF'
                w='100%'
                textAlign='center'
              >
                about
              </Link>
              <Link
                variant='menuLink'
                pb={7}
                borderBottom='1px solid #9289FF'
                w='100%'
                textAlign='center'
              >
                Project
              </Link>
              <Link
                variant='menuLink'
                pb={7}
                borderBottom='1px solid #9289FF'
                w='100%'
                textAlign='center'
              >
                Contact
              </Link>
            </VStack>

            <Img src='' />
          </Container>
        </Flex>
      )}
    </Flex>
  )
}

export default DropMenu
