import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

interface ContainerProps {
  children: ReactNode;
}
const SpringAnimation: FC<ContainerProps> = ({ children }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      display="inline-block"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        {children}
    </MotionBox>
  );
};

export default SpringAnimation;
