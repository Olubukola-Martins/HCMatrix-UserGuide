import { Outlet } from "react-router-dom";
import { Footer, Hero } from "../../components/user";

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
