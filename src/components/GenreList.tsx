import useGenres from '../hooks/useGenres.ts';
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url.ts';
import GenreListSkeleton from './GenreListSkeleton.tsx';
import useGameQueryStore from '../store.ts';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const gameQuery = useGameQueryStore(state => state.gameQuery);
  const setGenreId = useGameQueryStore(state => state.setGenreId);

  if (error) return null;
  if (isLoading)
    return (
      <>
        {skeletons.map(skeleton => (
          <GenreListSkeleton key={skeleton} />
        ))}
      </>
    );

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={genre.id === gameQuery.genreId ? 'bold' : 'normal'}
                variant={'link'}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
