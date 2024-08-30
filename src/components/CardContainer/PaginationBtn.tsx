import { Button, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

interface PaginationBtnProps {
  Pages: number[];
  CurrentPage: number;
  SetPage: (page: number) => void;
}
const PaginationBtn: FC<PaginationBtnProps> = ({
  Pages,
  SetPage,
  CurrentPage,
}) => {
  const { colorMode } = useColorMode()
  return (
    <ButtonGroup>
      {Pages.map((page, index) => (
        <Button
          onClick={() => SetPage(page)}
          color={page === CurrentPage ? (colorMode === "light" ? "gray.700" : "gray.50") : (colorMode === "light" ? "gray.400" : "gray.500")}
          borderRadius="full"
          size="sm"
          key={index}
          variant="pagination"
        >
          {page}
        </Button>
      ))}
    </ButtonGroup>
  );
};
export default PaginationBtn;
