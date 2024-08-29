import { FC } from "react";
import { Navbar, CardContainer } from "../components";

const Species: FC = () => {
  const Page = "species";
  return (
    <>
      <Navbar />
      <CardContainer PageName={Page} />
    </>
  );
};

export default Species;
