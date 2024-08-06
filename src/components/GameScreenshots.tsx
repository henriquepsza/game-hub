import useScreenshots from '../hooks/useScreenshots.ts';
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;
  if (!data) return null;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data.results.map(file => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
