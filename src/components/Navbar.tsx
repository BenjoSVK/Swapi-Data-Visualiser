import React from "react";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Drawer from "./DrawerComponent";
import { SearchBar, pathUtil } from "../assets";

const { normalizePath, activePaths } = pathUtil;

const Navbar: React.FC = () => {
  return (
    <Flex my={2} ml={1} align="center">
      {activePaths.slice(1).map((path) => (
        <Button
          mx={1}
          borderRadius={50}
          as={Link}
          to={normalizePath(path)}
          variant="ghost"
          size="xs"
          key={path}
          _hover={{ transform: "scale(1.1)" }}
        >
          {path.charAt(1).toUpperCase() + path.slice(2)}
        </Button>
      ))}
      <Spacer />
      <SearchBar />
      <Drawer />
    </Flex>
  );
};

export default Navbar;
