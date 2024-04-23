import { Card, CardBody, CardHeader, HStack, Heading, Image, Text} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Prop {
  game: Game
}

const GameCard = ({game}: Prop) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
        <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top}></Emoji></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
