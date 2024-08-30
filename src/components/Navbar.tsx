import React from "react";
import { Button, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Drawer from "./DrawerComponent";
import { SearchBar, pathUtil } from "../assets";
import { isActivePath } from "../assets/pathUtils";

const { normalizePath, activePaths } = pathUtil;

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex py={2} pl={1} align="center">
      {activePaths.map((path) => (
        <Button
          as={Link}
          to={normalizePath(path)}
          variant="navbarButton"
          size="xs"
          cursor="pointer"
          key={path}
          style={
            isActivePath(location.pathname, path)
              ? { color:
                colorMode === "light" ? "black" : "white", fontSize: 30, fontWeight: 600 }
              : {}
          }
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
