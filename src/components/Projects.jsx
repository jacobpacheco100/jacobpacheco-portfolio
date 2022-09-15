import React from 'react'
import { Heading, Box, Grid, GridItem } from '@chakra-ui/react'

import audiophile from '../images/project-previews/audiophile.jpg'
import bookmark from '../images/project-previews/bookmark.jpg'
import gameshow from '../images/project-previews/gameshow.jpg'
import gradientology from '../images/project-previews/gradientology.jpg'
import cryptopia from '../images/project-previews/cryptopia.png'
import skotcha from '../images/project-previews/skotcha.png'

import Project from './Project'

const Projects = () => {
  // add projects here
  const projectData = [
    {
      name: 'Skotcha',
      img: skotcha,
      imgPosition: 'top center',
      repoUrl: 'https://github.com/jacobpacheco100/Skotcha',
      siteUrl: 'https://skotcha.netlify.app/',
    },
    {
      name: 'Cryptopia',
      img: cryptopia,
      imgPosition: 'top center',
      repoUrl: 'https://github.com/jacobpacheco100/Cryptopia',
      siteUrl: 'https://cryptopia.netlify.app/',
    },
    {
      name: 'Gradientology',
      img: gradientology,
      imgPosition: 'top center',
      repoUrl: 'https://github.com/jacobpacheco100/gradientology',
      siteUrl: 'https://gradientology.netlify.app/',
    },
    {
      name: 'Bookmark Landing Page',
      img: bookmark,
      imgPosition: '',
      repoUrl: 'https://github.com/jacobpacheco100/bookmark-landing-page',
      siteUrl: 'https://jacobpacheco100.github.io/bookmark-landing-page/',
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
      <Heading variant='sectionHeading' textColor={'#3d404a'} mb={20}>
        My...
        <br />
        Projects
      </Heading>
      <Grid
        w={'100%'}
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
        gap={14}
      >
        {displayProjects}
      </Grid>
    </Box>
  )
}

export default Projects
