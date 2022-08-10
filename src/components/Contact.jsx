import {
  Heading,
  Text,
  Button,
  Box,
  Flex,
  Img,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import IconGroup from './IconGroup'

const Contact = () => {
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
      <FormControl maxW={'600px'} isRequired>
        <VStack spacing={4} color='text.light'>
          <Input
            _focus={{ borderColor: 'primary' }}
            bg='white'
            placeholder='First name'
          />
          <Input
            _focus={{ borderColor: 'primary' }}
            bg='white'
            placeholder='Email address'
            type='email'
          />
          <Textarea
            _focus={{ borderColor: 'primary' }}
            bg='white'
            minH={200}
            placeholder='Message'
          />
          <Button variant='primary' w='100%'>
            Send
          </Button>
        </VStack>
      </FormControl>
    </Flex>
  )
}

export default Contact
