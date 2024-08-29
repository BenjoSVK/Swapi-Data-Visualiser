import { FC } from "react";
import { Navbar, CardContainer } from "../components";

const Vehicles: FC = () => {
  return (
    <>
      <Navbar />
      <CardContainer PageName="vehicles" />
    </>
  );
};

export default Vehicles;
