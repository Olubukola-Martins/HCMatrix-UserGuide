import { Outlet } from "react-router-dom";
import { Footer, HeroSection } from "../components";

const Home = () => {
  return (
    <>
      <HeroSection user="Seth" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
