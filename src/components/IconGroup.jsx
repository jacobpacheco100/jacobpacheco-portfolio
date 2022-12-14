import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { ImLinkedin2 } from 'react-icons/im'
import { Box, Flex, Img, Link, Stack } from '@chakra-ui/react'

const IconGroup = ({
  spacing,
  direction,
  color,
  bg,
  colorHV,
  bgHV,
  border,
}) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      <Flex
        target={'_blank'}
        href='https://www.upwork.com/freelancers/~011c91af7d258b29fc'
        as={Link}
        _hover={{ bg: bgHV, color: colorHV }}
        align='center'
        justify='center'
        h={43}
        w={43}
        bg={bg}
        rounded='full'
        color={color}
        p='3px 0 0 2px'
        border='1px solid transparent'
        borderColor={border}
      >
        <SiUpwork fontSize={22} />
      </Flex>

      <Flex
        target={'_blank'}
        href='https://www.linkedin.com/in/jacobpachecofrontenddev/'
        as={Link}
        _hover={{ bg: bgHV, color: colorHV }}
        align='center'
        justify='center'
        h={43}
        w={43}
        bg={bg}
        rounded='full'
        color={color}
        border='1px solid transparent'
        borderColor={border}
      >
        <ImLinkedin2 fontSize={20} />
      </Flex>

      <Flex
        target={'_blank'}
        href='https://twitter.com/JDesignsArt'
        as={Link}
        _hover={{ bg: bgHV, color: colorHV }}
        align='center'
        justify='center'
        h={43}
        w={43}
        bg={bg}
        rounded='full'
        color={color}
        border='1px solid transparent'
        borderColor={border}
      >
        <AiOutlineTwitter fontSize={25} />
      </Flex>

      <Flex
        target={'_blank'}
        href='https://github.com/JacobPacheco100'
        as={Link}
        _hover={{ bg: bgHV, color: colorHV }}
        align='center'
        justify='center'
        h={43}
        w={43}
        bg={bg}
        rounded='full'
        color={color}
        border='1px solid transparent'
        borderColor={border}
      >
        <AiFillGithub fontSize={27} />
      </Flex>
    </Stack>
  )
}

export default IconGroup
