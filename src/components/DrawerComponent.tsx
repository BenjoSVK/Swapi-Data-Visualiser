import React, { FC, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation, Link } from "react-router-dom";
import { ColorModeBtn, pathUtil } from "../assets";

const { normalizePath, isActivePath, activePaths } = pathUtil;

const DrawerComponent: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();

  return (
    <>
      <IconButton
        aria-label="Hamburger Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        variant="ghost"
        isRound
        ref={btnRef}
        size="xs"
        mr={2}
        sx={{
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s',
          },
          '&:active': {
            transform: 'scale(1)',
            transition: 'transform 0.2s',
          },
        }}
      />
      <Drawer
        finalFocusRef={btnRef}
        onClose={onClose}
        placement="right"
        isOpen={isOpen}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton borderRadius="full" mt={2} />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={1} align="stretch">
              {activePaths.map((path) => (
                <React.Fragment key={path}>
                  <Button
                    as={Link}
                    to={normalizePath(path)}
                    variant="ghost"
                    size="sm"
                  >
                    {path === "/"
                      ? "Home"
                      : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Button>
                  <Divider
                    visibility={
                      isActivePath(location.pathname, path)
                        ? "visible"
                        : "hidden"
                    }
                  />
                </React.Fragment>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <ColorModeBtn />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
