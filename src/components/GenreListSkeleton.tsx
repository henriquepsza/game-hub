import { List, ListItem, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY={"5px"}>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
