import React from 'react'
import {
  VStack,
  HStack,
  Text,
  Img,
  Box,
  Button,
  Flex,
  Link,
  GridItem,
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import linkIcon from '../images/project-btn-icons/site-link.svg'
import gitIcon from '../images/project-btn-icons/git-repo.svg'

const Project = ({ name, img, repoUrl, siteUrl, imgPosition }) => {
  return (
    <GridItem w={'100%'}>
      <VStack>
        <Box w='100%'>
          <Link
            href={siteUrl}
            target='_blank'
            display='block'
            w='100%'
            h={481}
            bg='white'
            rounded={'10px 10px 0 0'}
            border='1px solid #CCC9D6'
            backgroundImage={img}
            backgroundSize='cover'
            backgroundPosition={imgPosition}
          ></Link>
          <Flex
            w='100%'
            h={78}
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

              <MenuList color='black'>
                <MenuItem
                  pb='15px'
                  borderBottom='1px solid black'
                  as={Link}
                  href={siteUrl}
                  _hover={{ bg: 'bg.200', textDecor: 'none' }}
                >
                  Go to website
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'bg.200', textDecor: 'none' }}
                  pt='15px'
                  as={Link}
                  href={repoUrl}
                >
                  Github repository
                </MenuItem>
              </MenuList>
            </Menu>
            <HStack display={{ base: 'none', md: 'block' }} spacing={4}>
              <Button
                href={repoUrl}
                target='_blank'
                as={Link}
                variant='projectRepo'
              >
                <Img src={gitIcon} />
              </Button>
              <Button
                href={siteUrl}
                target='_blank'
                as={Link}
                variant='projectSite'
              >
                <Img src={linkIcon} />
              </Button>
            </HStack>
          </Flex>
        </Box>
      </VStack>
    </GridItem>
  )
}

export default Project
