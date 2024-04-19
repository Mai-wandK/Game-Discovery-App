import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}


const GameGrid = () => {
  // for storing our game objects
  const [games, setGames] = useState<Game[]>([]) // Specify the type of the state as an array of Game objects
  const [error, setError] = useState('')

  // using useEffect to fetch data from the API

  useEffect(() =>{
    apiClient.get<FetchGamesResponse>('/games')
      .then(response => setGames(response.data.results)) // Access the response data when setting the state
      .catch(error => setError(error.message)) // Catch any errors and set the error state
  })


  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
          {games.map(game => (
            <li key={game.id}>{game.name} </li>
          ))}

      </ul>
    </>
  )
}

export default GameGrid
