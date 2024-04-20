import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Container from "./Container";
import HeroImg from "../../assets/common/images/heroimg.png";
import Hand from "../../assets/user/Hand.svg";
import Idea from "../../assets/user/bulb.svg";
import Search from "../../assets/user/search.svg";
import GlassDesign from "./GlassDesign";
import SearchBar from "./SearchBar";

const Hero = ({ showSearch }) => {
  const { contactBtn } = useSelector((store) => store.customization);
  const navigate = useNavigate();

  const toAdmin = () => {
    navigate("/admin");
  };

  return (
    <section
      className="bg-cover bg-center relative text-primary h-96"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <Container margin="mb-0 py-7 z-[9999999]">
        <nav className="flex justify-between items-center text-md md:text-[1.15rem] mb-3">
          <div className="flex items-center">
            <span>Hello</span>
            <img src={Hand} alt="" className="md:h-[25px] h-4 ml-2" />
          </div>
          <p className="text-white cursor-pointer" onClick={() => toAdmin()}>
            HcMatrix Help Center
          </p>
        </nav>

        {contactBtn && (
          <GlassDesign className="inline-block rounded-xl px-4 py-2 absolute right-0 md:right-14 cursor-pointer animate-pulse">
            <p className="text-[10px]">Contact Us</p>
          </GlassDesign>
        )}

        <div className="w-[100%] md:w-[75%] mx-auto md:mt-[2rem] mt-[4.5rem] ">
          <div className=" flex items-center md:mb-2 mb-4 justify-center">
            <h1 className="text-center font-bold text-lg  md:text-2xl md:text-l mr-2">
              How can we help?
            </h1>

            <img src={Idea} alt="" className="md:h-16 h-10 " />

            {/* <Idea /> */}
          </div>

          <SearchBar />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
