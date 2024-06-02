import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import HeroImg from "../../assets/common/images/heroimg.png";
import Hand from "../../assets/user/Hand.svg";
import Idea from "../../assets/user/bulb.svg";
import GlassDesign from "./GlassDesign";
import SearchBar from "./SearchBar";
import Logo from "../../assets/user/Logo.svg";

const Hero = ({ showSearch }) => {
  const { contactBtn, headerStyle } = useSelector(
    (store) => store.customization
  );
  const navigate = useNavigate();

  const toAdmin = () => {
    navigate("/admin");
  };

  const toHome = () => {
    navigate("/");
  };

  return (
    <section
      className="bg-cover bg-center relative text-primary h-96"
      style={{ backgroundImage: `url(${headerStyle ? headerStyle : HeroImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <Container margin="mb-0 py-4 md:py-7 z-[9999999]">
        <nav className="flex justify-between items-center text-md md:text-[1.15rem] mb-3">
          <img
            src={Logo}
            alt=""
            className="md:hidden h-12 md:h-14 -ml-3"
            onClick={() => toHome()}
          />

          <div className="hidden md:flex items-center">
            <span>Hello</span>
            <img src={Hand} alt="" className="md:h-[25px] h-4 ml-2" />
          </div>

          <p
            className="text-white text-[12px] md:text-sm cursor-pointer md:block"
            onClick={() => toAdmin()}
          >
            HcMatrix Guide Center
          </p>
        </nav>

        {contactBtn && (
          <GlassDesign className="inline-block rounded-xl px-4 py-2 absolute -mt-4 md:-mt-0 right-5 md:right-14 cursor-pointer animate-pulse">
            <p className="text-[9px] md:text-[10px]">
              <a
                target="_black"
                href="https://hcmatrixsupport.powerappsportals.com/contact-us/"
              >
                Contact Us
              </a>
            </p>
          </GlassDesign>
        )}

        <div className="w-[99%] md:w-[75%] mx-auto md:mt-[3rem] mt-[7rem] relative ">
          <div className=" flex items-center justify-center">
            <h1 className="text-center font-bold text-sm  sm:text-2xl md:text-l mr-2">
              How can we help?
            </h1>

            <img src={Idea} alt="" className="md:h-16 h-10 hidden sm:block  " />

            {/* <Idea /> */}
          </div>

          <SearchBar />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
