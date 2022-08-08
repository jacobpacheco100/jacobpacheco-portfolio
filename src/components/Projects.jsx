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
import bookmark from '../images/project-previews/bookmark.jpg'
import gameshow from '../images/project-previews/gameshow.jpg'
import devjobs from '../images/project-previews/devjobs.jpg'

import Project from './Project'

const Projects = () => {
  // add projects here
  const projectData = [
    {
      name: 'Audiophile E-Comerce Store',
      img: audiophile,
      imgPosition: '',
      repoUrl:
        'https://github.com/JacobPacheco100/Audiophile-e-commerce-website',
      siteUrl:
        'https://jacobpacheco100.github.io/Audiophile-e-commerce-website/',
    },
    {
      name: 'Bookmark Landing Page',
      img: bookmark,
      imgPosition: '',
      repoUrl: 'https://github.com/JacobPacheco100/bookmark-landing-page',
      siteUrl: 'https://jacobpacheco100.github.io/bookmark-landing-page/',
    },
    {
      name: 'Devjobs Web App',
      img: devjobs,
      imgPosition: '',
      repoUrl: 'https://github.com/JacobPacheco100/DevJobs-App',
      siteUrl: '',
    },
    {
      name: 'Game Show App',
      img: gameshow,
      imgPosition: 'center',
      repoUrl: 'https://github.com/JacobPacheco100/GameShowApp',
      siteUrl: 'https://jacobpacheco100.github.io/GameShowApp/',
    },
  ]

  const displayProjects = projectData.map((proj) => {
    return (
      <Project
        name={proj.name}
        img={proj.img}
        siteUrl={proj.siteUrl}
        repoUrl={proj.repoUrl}
        imgPosition={proj.imgPosition}
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
