import React from 'react'
import { Heading, Box } from '@chakra-ui/react'

import audiophile from '../images/project-previews/audiophile.jpg'
import bookmark from '../images/project-previews/bookmark.jpg'
import gameshow from '../images/project-previews/gameshow.jpg'
import gradientology from '../images/project-previews/gradientology.jpg'

import Project from './Project'

const Projects = () => {
  // add projects here
  const projectData = [
    {
      name: 'Gradientology',
      img: gradientology,
      imgPosition: 'center',
      repoUrl: 'https://github.com/jacobpacheco100/gradientology',
      siteUrl: 'https://gradientology.netlify.app/',
    },
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
