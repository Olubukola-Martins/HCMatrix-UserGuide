import { Outlet } from "react-router-dom";
import { Footer, HeroSection, Hero } from "../../components/user";

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
