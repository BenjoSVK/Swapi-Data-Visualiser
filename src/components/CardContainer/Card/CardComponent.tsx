import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FC } from "react";
import ImageComponent from "./ImageComponent";

interface CardComponentProps {
  nameOfPost: string;
  id: number;
}
const CardComponent: FC<CardComponentProps> = ({ nameOfPost, id }) => {
  return (
    <Card variant="funky">
      <CardBody>
        <ImageComponent id={id} />
        <CardHeader>
          <Stack>
            {nameOfPost === "Darth Vader" ? (
              <Tooltip label="Join the dark side" aria-label="A am the only one who think Darth Vader is cool?" openDelay={500} placement="top">
                <Heading size="sm">
                  {nameOfPost.charAt(0).toUpperCase() + nameOfPost.slice(1)}
                </Heading>
              </Tooltip>
            ) : (
              <Heading size="sm">
                {nameOfPost.charAt(0).toUpperCase() + nameOfPost.slice(1)}
              </Heading>
            )}
          </Stack>
        </CardHeader>
        {/* <CardFooter>
          <Button>
            more info
          </Button>
        </CardFooter> */}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
