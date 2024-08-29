import { Grid } from "@chakra-ui/react";
import { FC } from "react";
import { CardComponent } from "..";

interface Post {
  name: string;
}

interface CardGridProps {
  Posts: Post[];
  CurrentPage: number;
  PostPerPage: number;
}

const CardGrid: FC<CardGridProps> = ({ Posts, CurrentPage }) => {
  let currentPost = (CurrentPage - 1) * 10;
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(230px, 1fr))" gap={6} role="list">
      {Posts.map((post, index) => {
        currentPost += 1;
        return <CardComponent key={index} nameOfPost={post.name} id={currentPost} />;
      })}
    </Grid>
  );
};
export default CardGrid;
