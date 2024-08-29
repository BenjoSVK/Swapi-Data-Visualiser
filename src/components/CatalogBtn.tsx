import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CatalogBtn: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/People");
  };

  return (
    <Box>
      <Text fontSize="xl">Explore the universe of Star Wars</Text>
      <MotionBox
        marginY={2}
        display="inline-block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          borderRadius="md"
          size="lg"
          onClick={() => {
            handleClick();
          }}
        >
          Take Me There!
        </Button>
      </MotionBox>
      <Text fontSize="xs">
        Data from <a href="https://swapi.dev">The Star Wars API</a>.
      </Text>
    </Box>
  );
};

export default CatalogBtn;
