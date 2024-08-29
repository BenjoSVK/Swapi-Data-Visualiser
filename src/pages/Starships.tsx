import { FC } from "react";import { Navbar, CardContainer } from "../components";


const Starships: FC = () => {
  const page = "starships";
  return (
    <>
      <Navbar />
      <CardContainer PageName={page} />
    </>
  );
};

export default Starships;
