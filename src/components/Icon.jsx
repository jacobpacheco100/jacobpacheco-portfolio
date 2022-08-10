import { AiFillGithub, AiOutlineTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { ImLinkedin2 } from 'react-icons/im'
import { Box, Flex, Img, Link } from '@chakra-ui/react'

const Icon = ({ icon, url }) => {
  return (
    <Flex
      align='center'
      justify='center'
      h={43}
      w={43}
      bg='#CACBDB'
      rounded='full'
    >
      <Link>
        <icon fontSize={20} color='#6F7A88' />
      </Link>
    </Flex>
  )
}

export default Icon
