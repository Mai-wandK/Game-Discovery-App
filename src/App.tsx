import { Grid, GridItem, Show, } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { platform } from 'os';



function App() {

   // we need to share the selected genre state between the GenreList and GameGrid components
   // so we will lift the state up to the App component
   // we will use the useState hook for storing the slected genre
   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

   const [selectedPlatform, setSelectedPlatform] = useState< Platform | null>(null);

  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}

    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}

    >
      <GridItem area='nav'>
         <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenreList
            onSelectGenre={(genre)=>setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
            />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector onSelectedPlatform={(platform)=>setSelectedPlatform(platform)}
        selectedPlatform={selectedPlatform}
        ></PlatformSelector>
        <GameGrid
        selectedPlatform={selectedPlatform}
        selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App;
