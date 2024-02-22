import { useSelector } from "react-redux";

import Container from "./Container";
import HeroImg from "../../assets/common/images/heroimg.png";
import Hand from "../../assets/user/Hand.svg";
import Idea from "../../assets/user/bulb.svg";
import Search from "../../assets/user/search.svg";
import GlassDesign from "./GlassDesign";

const Hero = () => {
  const { suggestedArticle, contactBtn, badge } = useSelector(
    (store) => store.customization
  );

  return (
    <section
      className="bg-cover bg-center relative text-primary h-96"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <Container margin="mb-0 py-7">
        <nav className="flex justify-between items-center text-md md:text-[1.15rem] mb-3">
          <div className="flex items-center">
            <span>Hello User</span>
            <img src={Hand} alt="" className="md:h-[25px] h-4  ml-2" />
          </div>
          <p className="text-white">HcMatrix Help Center</p>
        </nav>

        {contactBtn && (
          <GlassDesign className="inline-block rounded-xl px-4 py-2 absolute right-0 md:right-14 cursor-pointer">
            <p className="text-[10px]">Contact Us</p>
          </GlassDesign>
        )}

        <div className="w-[100%] md:w-[75%] mx-auto md:mt-[2rem] mt-[4.5rem] ">
          <div className=" flex items-center md:mb-2 mb-4 justify-center">
            <h1 className="text-center font-bold text-lg  md:text-2xl md:text-l mr-2">
              How can we help?
            </h1>

            <img src={Idea} alt="" className="md:h-16 h-10" />

            {/* <Idea /> */}
          </div>

          <GlassDesign className="rounded-md pl-5 py-2 md:py-4 mt-[-.7rem]">
            <div className="flex">
              <img src={Search} alt="" className="h-7" />
              <input
                type="text"
                placeholder="Search for articles"
                className="bg-transparent outline-none text-l md:text-xl text-body w-[100%] md:w-[85%]  ml-6 "
              />
            </div>
          </GlassDesign>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
