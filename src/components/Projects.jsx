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
import audiophile from '../images/project-previews/audiophile.jpg'

import Project from './Project'

const Projects = () => {
  // add projects here
  const projectData = [
    {
      name: 'Audiophile E-Comerce Store',
      img: audiophile,
      repoUrl:
        'https://github.com/JacobPacheco100/Audiophile-e-commerce-website',
      siteUrl:
        'https://jacobpacheco100.github.io/Audiophile-e-commerce-website/',
    },
  ]

  const displayProjects = projectData.map((proj) => {
    return (
      <Project
        name={proj.name}
        img={proj.img}
        siteUrl={proj.siteUrl}
        repoUrl={proj.repoUrl}
      />
    )
  })

  return (
    <Box>
      <Heading variant='sectionHeading' mb={20}>
        My...
        <br />
        Projects
      </Heading>
      {displayProjects}
    </Box>
  )
}

export default Projects
