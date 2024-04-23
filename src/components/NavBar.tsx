import { HStack, Image, Flex } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


const NavBar = () => {
  return (
    <HStack display="flex" alignItems="center" justifyContent="space-between" padding="10px" >
      <Image src={Logo} alt="Logo" boxSize='60px' />
      <SearchInput></SearchInput>
      <ColorModeSwitch  />
    </HStack>
  )
}

export default NavBar;
