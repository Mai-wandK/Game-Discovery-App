// Desc: Skeleton for GameCard
import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height='200px'>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  )
}

export default GameCardSkeleton
