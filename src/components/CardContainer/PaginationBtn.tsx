import { Button, ButtonGroup } from "@chakra-ui/react";
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
  return (
    <ButtonGroup>
      {Pages.map((page, index) => (
        <Button
          onClick={() => SetPage(page)}
          textDecoration={page === CurrentPage ? "underline" : "none"}
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
