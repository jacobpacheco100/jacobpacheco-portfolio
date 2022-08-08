import React from 'react'
import {
  VStack,
  HStack,
  Heading,
  Text,
  Img,
  Box,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import linkIcon from '../images/project-btn-icons/site-link.svg'
import gitIcon from '../images/project-btn-icons/git-repo.svg'

const Project = ({ name, img, repoUrl, siteUrl }) => {
  return (
    <VStack>
      <Box w='100%'>
        <Box
          w='100%'
          h={481}
          bg='white'
          rounded={'10px 10px 0 0'}
          border='1px solid #CCC9D6'
          backgroundImage={img}
          backgroundSize='cover'
        ></Box>
        <Flex
          w='100%'
          h={100}
          bg='white'
          rounded={'0 0 10px 10px'}
          border='1px solid #CCC9D6'
          borderTop={0}
          justify='space-between'
          align='center'
          px={8}
        >
          <Text
            color='black'
            fontWeight='bold'
            maxW={{ base: 170, sm: 500 }}
            lineHeight={1.2}
          >
            {name}
          </Text>
          <Menu>
            <MenuButton
              display={{ base: 'block', md: 'none' }}
              as={Button}
              variant='plusInfo'
            >
              +
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href={siteUrl}>
                Go to website
              </MenuItem>
              <MenuItem as={Link} href={repoUrl}>
                Github repository
              </MenuItem>
            </MenuList>
          </Menu>
          <HStack display={{ base: 'none', md: 'block' }} spacing={4}>
            <Button href={repoUrl} as={Link} variant='projectRepo'>
              <Img src={gitIcon} />
            </Button>
            <Button href={siteUrl} as={Link} variant='projectSite'>
              <Img src={linkIcon} />
            </Button>
          </HStack>
        </Flex>
      </Box>
    </VStack>
  )
}

export default Project
