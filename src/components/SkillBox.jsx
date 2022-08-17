import React from 'react'
import { Flex, Text, HStack } from '@chakra-ui/react'
import { DiReact } from 'react-icons/di'

const SkillBox = ({ skill, icon }) => {
  return (
    <Flex
      justify={'center'}
      h={85}
      border={'2px solid #EAE9FB'}
      rounded={8}
      bg={'#F6F5FF'}
    >
      <HStack>
        {/* <DiReact fontSize={28} color={'#7F00FE'} /> */}
        <Text pl={10} fontSize={17} fontWeight='bold' color='black'>
          {skill}
        </Text>
      </HStack>
    </Flex>
  )
}

export default SkillBox
