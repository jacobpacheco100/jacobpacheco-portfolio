import { Flex, Box } from '@chakra-ui/react'
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
        zIndex={2}
        color='white'
        fontSize={30}
      />
      {menu && (
        <Box bg='primary' w='100vw' h='100vh' pos='absolute' top={0}></Box>
      )}
    </Flex>
  )
}

export default DropMenu
