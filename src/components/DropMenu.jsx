import { Flex, Box, Link, VStack, Heading, Img } from '@chakra-ui/react'
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
      h='80px'
      align='center'
      justify='center'
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
          w='100vw'
          h='100vh'
          pos='absolute'
          top={0}
          direction='column'
          align='center'
        >
          <VStack
            spacing='60px'
            fontWeight='medium'
            color='white'
            textTransform='uppercase'
          >
            <Heading>about</Heading>
            <Heading>Project</Heading>
            <Heading>Contact</Heading>
          </VStack>

          <Img src='' />
        </Flex>
      )}
    </Flex>
  )
}

export default DropMenu
