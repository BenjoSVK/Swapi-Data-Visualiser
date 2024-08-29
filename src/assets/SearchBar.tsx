import {
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar: React.FC = () => {
  return (
    <InputGroup size="xs" width="auto" mr={2.5}>
      <Input
        focusBorderColor="gray.500"
        placeholder="Search"
        borderRadius={50}
        maxW={450}
        size="xs"
      />
      <InputRightElement >
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon height={3} />}
          variant="link"
          isRound={true}
          size="sm"
          minW={5}
          height={5}
          sx={{
            '&:hover': {
              transform: 'translateY(-1px) scale(1.2)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            },
            '&:active': {
              transform: 'translateY(0)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            },
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default Searchbar;
