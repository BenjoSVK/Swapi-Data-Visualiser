import { FC } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import SpringAnimation from "./SpringAnimation";

const ColorModeBtn: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <SpringAnimation>
        <IconButton
          variant="outline"
          size="sm"
          isRound={true}
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
        >
          {colorMode === "light" ? "dark" : "light"}
        </IconButton>
      </SpringAnimation>
  );
};

export default ColorModeBtn;
