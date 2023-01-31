import {FC, useEffect, useState} from 'react';
import IntroPage from "../IntroPage/IntroPage";
import MenuPage from "../MenuPage/MenuPage";
import Loader from "../../../../components/Loader";

const LandingPage:FC = () => {
  const [timeToLoad, setTimeToLoad] = useState(false);
  useEffect(() => {
    setInterval(() => setTimeToLoad(true), 1500)
  }, [])
  return (
    <>
      <Loader isLoaded={timeToLoad} />
      <IntroPage />
      <MenuPage />
    </>
  )
}
export default LandingPage