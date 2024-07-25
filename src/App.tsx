import { useState } from 'react';
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar.tsx';
import GameGrid from './components/GameGrid.tsx';
import GenreList from './components/GenreList.tsx';
import { Genre } from './hooks/useGenre.ts';
import PlatformSelector from './components/PlatformSelector.tsx';
import SortSelector from './components/SortSelector.tsx';
import GameHeading from './components/GameHeading.tsx';
import { Platform } from './hooks/usePlatforms.ts';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={'nav'}>
        <NavBar
          onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above={'lg'}>
        <GridItem area={'aside'} paddingX={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={platform =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={sortOrder =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
