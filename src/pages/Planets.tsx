import { FC } from 'react'
import { Navbar, CardContainer } from "../components";

const Planets: FC = () => {
  const Page = "planets";
  const Name = "planets";
  return (
    <>
      <Navbar />
      <CardContainer NameOfPage={Page} ImageName={Name}/>
    </>
  )
}

export default Planets