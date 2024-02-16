import { Outlet } from "react-router-dom";
import { Footer, HeroSection, Hero } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;


