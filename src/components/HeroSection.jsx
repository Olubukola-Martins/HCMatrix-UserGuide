import bulb from "../assets/bulb.svg";
import search01 from "../assets/search-01.svg";
import Nav from "./Nav";
import bg from "../assets/bg.svg";

const HeroSection = (props) => {
  return (
    <>
      <div></div>
      <div className="component">
        <div className="hero">
          <div className="hero__container">
            <Nav user={props.user} />

            <div className="hero__container__content">
              <div className="hero__container__content__caption">
                <p>How can we help? </p>
                <img src={bulb} alt="HuggingFace svg" />
              </div>

              <div className="search-box">
                <input type="text" placeholder="Search for articles" />
                <img src={search01} alt="search icon" />
              </div>
            </div>
          </div>

          <div className="hero__background">
            <img src={bg} alt="" />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
