import useGenre from "../hooks/useGenre.ts";
import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (error) return null;
  if (isLoading)
    return (
      <List>
        {/*<Skeleton />*/}
        {skeletons.map(() => (
          <ListItem paddingY={"5px"}>
            <SkeletonText />
          </ListItem>
        ))}
      </List>
    );

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
