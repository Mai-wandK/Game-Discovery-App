import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'


const NavBar = () => {
  return (
    <HStack>
      <Image
        src={Logo}
        alt="Logo"
        boxSize='60px' />
        < Text fontSize='2xl'>NavBar</Text>


    </HStack>
  )
}

export default NavBar
