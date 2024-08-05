import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform.ts';
import useGenre from '../hooks/useGenre.ts';
import useGameQueryStore from '../store.ts';

const GameHeading = () => {
  const gameQuery = useGameQueryStore(state => state.gameQuery);
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games `;

  return (
    <Heading as={'h1'} marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
