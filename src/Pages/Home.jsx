import { Outlet } from "react-router-dom";
import { Hero, Footer } from "../components";

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
