import {
  Heading,
  Text,
  Button,
  Box,
  Flex,
  FormControl,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

import IconGroup from './IconGroup'

const Contact = () => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justify='space-between'
      maxW={{ base: '600px', lg: '100%' }}
      mx={{ base: 'auto', lg: 0 }}
    >
      <Box maxW={500} mr={5}>
        <Heading
          variant='sectionHeading'
          color={'#6d6e85'}
          mb={{ base: 10, lg: 7 }}
        >
          Get in <br /> in touch...
        </Heading>
        <Flex
          direction='column'
          spacing={7}
          align='left'
          display={{ base: 'none', lg: 'block' }}
        >
          <Text mb='25px' color='primary' fontWeight='bold'>
            jacobpachecoofficial@gmail.com
          </Text>
          <Text mb='45px' color='text.light'>
            Send me an email if you have any questions or are interested in
            starting a project. If you prefer, we can talk elsewhere
          </Text>
          <IconGroup
            spacing={5}
            direction='row'
            color='#6F7A88'
            bg='#CACBDB'
            colorHV='white'
            bgHV='primary'
          />
        </Flex>
      </Box>
      <FormControl
        as={'form'}
        action='post'
        data-netlify='true'
        maxW={'550px'}
        isRequired
      >
        <VStack spacing={4} color='text.light'>
          <Input
            _focus={{ borderColor: 'primary' }}
            bg='white'
            placeholder='First name'
            name='name'
            id='name'
          />
          <Input
            _focus={{ borderColor: 'primary' }}
            bg='white'
            placeholder='Email address'
            type='email'
            name='email'
            id='email'
          />
          <Textarea
            _focus={{ borderColor: 'primary' }}
            bg='white'
            minH={200}
            placeholder='Message'
            name='message'
            id='message'
          />
          <Button type='submit' variant='primary' w='100%'>
            Send
          </Button>
        </VStack>
      </FormControl>
    </Flex>
  )
}

export default Contact
