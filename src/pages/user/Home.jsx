import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Hero } from "../../components/user";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { ids } = useSelector((store) => store.userData);

  useEffect(() => {
    if (ids?.main === "") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
