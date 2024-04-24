import { HStack, Icon, Switch, Text, useColorMode} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa';


const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
      <FaMoon />
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      < FaSun />
    </HStack>
  )
}

export default ColorModeSwitch;
