import { FC } from "react";
import { Navbar, CardContainer } from "../components";

const People: FC = () => {
  const Page = "people";
  const Name = "characters";
  return (
    <>
      <Navbar />
      <CardContainer NameOfPage={Page} ImageName={Name}/>
    </>
  );
};

export default People;
 