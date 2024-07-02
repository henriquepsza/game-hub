import useGenre from "../hooks/useGenre.ts";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (error) return null;
  if (isLoading)
    return (
      <>
        {skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton} />
        ))}
      </>
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
