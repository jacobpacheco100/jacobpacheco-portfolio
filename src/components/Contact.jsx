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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(event) {
    setFormData((prev) => {
      return { ...formData, [event.target.name]: event.target.value }
    })
  }
  console.log(formData)

  const validate = () => {}
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justify='space-between'
      maxW={{ base: '600px', lg: '100%' }}
      mx={{ base: 'auto', lg: 0 }}
    >
      <Box maxW={355} mr={5}>
        <Heading variant='sectionHeading' mb={{ base: 10, lg: 7 }}>
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
          <Text mb='45px' fontWeight='400' color='text.light'>
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
      <FormControl onSubmit={validate} maxW={'600px'} isRequired>
        <VStack spacing={4} color='text.light'>
          <Input
            _focus={{ borderColor: 'primary' }}
            bg='white'
            placeholder='First name'
            name='name'
            onChange={handleChange}
          />
          <Input
            _focus={{ borderColor: 'primary' }}
            bg='white'
            placeholder='Email address'
            type='email'
            name='email'
            onChange={handleChange}
          />
          <Textarea
            _focus={{ borderColor: 'primary' }}
            bg='white'
            minH={200}
            placeholder='Message'
            name='message'
            onChange={handleChange}
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
