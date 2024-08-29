import { FC, useState, useMemo } from "react";
import { CardGrid, PaginationBtn } from "..";
import {
  Card,
  CardBody,
  CardFooter,
  Spinner,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useFetchDisplay, ImageUrlProvider } from "../../hooks";

interface CardContainerProps {
  NameOfPage: string;
  ImageName: string;
}

const CardContainer: FC<CardContainerProps> = ({ NameOfPage, ImageName }) => {
  const postsPerPage = 10;
  const [page, setPage] = useState(1);
  const { data, count, loading, error } = useFetchDisplay(NameOfPage, page);
  const pages = useMemo(() => {
    if (count > 0) {
      return Array.from(
        { length: Math.ceil(count / postsPerPage) },
        (_, index) => index + 1
      );
    }
    return [];
  }, [count, postsPerPage]);

  const renderContent = () => {
    if (loading) {
      return (
        <Stack spacing={4} align="center" role="status" aria-live="polite">
          <Spinner size="xl" />
          <Text>Loading...</Text>
        </Stack>
      );
    }
    if (error) {
      console.error(error);
      return (
        <Box role="alert" aria-live="assertive">
          <Text color="red.500">Error fetching data: {error.message}</Text>
        </Box>
      );
    }
    return (
      <CardGrid Posts={data} CurrentPage={page} PostsPerPage={postsPerPage} />
    );
  };

  return (
    <Card variant="main">
      <CardBody>
        <ImageUrlProvider value={ImageName}>{renderContent()}</ImageUrlProvider>
      </CardBody>
      <CardFooter>
        <Stack>
          <PaginationBtn Pages={pages} SetPage={setPage} CurrentPage={page} />
          {/* <Text fontSize="3xs">Created by Ben :)</Text> */}
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default CardContainer;
