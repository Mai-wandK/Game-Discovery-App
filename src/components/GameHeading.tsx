import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
  const heading =  `Game: ${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={5} fontSize={50}>
      {heading}
    </Heading>
  )
}

export default GameHeading
