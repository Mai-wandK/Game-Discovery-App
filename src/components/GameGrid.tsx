import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';


interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({gameQuery}: Props) => {

  const {data, error, isLoading} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:2, md:2, lg:3, xl:5}} spacing={3} padding='10px'
      >
      {isLoading &&
      skeletons.map((skeleton)=> <GameCardContainer key={skeleton}><GameCardSkeleton ></GameCardSkeleton></GameCardContainer>)
      }
      {data.map(game => (
            <GameCardContainer key={game.id} ><GameCard game={game}/></GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
