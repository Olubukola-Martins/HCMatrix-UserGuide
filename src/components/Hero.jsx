import Container from "./Container";
import HeroImg from "../assets/images/heroimg.png";
import Hand from "../assets/Hand.svg";
import Idea from "../assets/bulb.svg";
import GlassDesign from "./GlassDesign";

const Hero = () => {
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

        <GlassDesign className="inline-block rounded-xl px-4 py-2 absolute right-0 md:right-14 cursor-pointer">
          <p className="text-[10px]">Contact Us</p>
        </GlassDesign>

        <div className="w-[100%] md:w-[75%] mx-auto mt-[2rem] ">
          <div className=" flex items-center mb-2 justify-center">
            <h1 className="text-center font-bold text-lg md:text-2xl md:text-l mr-2">
              How can we help?
            </h1>

            <img src={Idea} alt="" />

            {/* <Idea /> */}
          </div>

          <GlassDesign className="rounded-md pl-5 py-2 md:py-4 mt-[-.7rem]">
            <div className="flex">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[35px] md:h-[35px] w-5 h-5"
              >
                <path
                  d="M30.625 30.625L38.5 38.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M35 19.25C35 10.5515 27.9486 3.5 19.25 3.5C10.5515 3.5 3.5 10.5515 3.5 19.25C3.5 27.9486 10.5515 35 19.25 35C27.9486 35 35 27.9486 35 19.25Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
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
