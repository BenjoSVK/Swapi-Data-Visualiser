import React from "react";
import CatalogBtn from "../components/CatalogBtn";
import AnimationBottom from "../assets/BottomAnimation";
import { Container, Heading, Text, Box } from "@chakra-ui/react";

interface Section {
  title: string;
}

const sections: Section[] = [
  { title: "Films" },
  { title: "People" },
  { title: "Planets" },
  { title: "Species" },
  { title: "Starships" },
  { title: "Vehicles" },
];

const Home: React.FC = () => {
  return (
    <Container textAlign="center" maxW="100%">
      <Box as="header" display="grid" placeItems="center" height="50vw">
        <Heading as="h1" size="2xl">
          Star Wars
        </Heading>
      </Box>
      <Box as="main">
        {sections.map((section, index) => (
          <Box
            as="section"
            key={index}
            display="grid"
            placeItems="center"
            height="48vw"
          >
            <AnimationBottom>
              <Text fontSize="3xl">{section.title}</Text>
            </AnimationBottom>
          </Box>
        ))}
        <Box as="section" display="grid" placeItems="center" height="50vw">
          <AnimationBottom>
            <CatalogBtn />
          </AnimationBottom>
        </Box>
      </Box>
    </Container>
  );
};
export default Home;
