import bulb from "../assets/bulb.svg";
import search01 from "../assets/search-01.svg";
import Nav from "./Nav";
import Footer from "./Footer";
import bg from "../assets/bg.svg";


const Page = props => {
  return (
    <>
      <div className="component">
        <div className="hero">
          <div className="hero__container">
            <Nav user={props.user}/>

            <div className="hero__container__content">
              <div className="hero__container__content__caption">
                <p>How can we help? </p>
                <img src={bulb} alt="HuggingFace svg" />
              </div>

              <div className="search-box">
                <input type="text" placeholder="Search for articles" />
                <img src={search01} alt="search icon" />
              </div>

              <p className="category-text">Categories</p>
            </div>
          </div>

          <div className="hero__background">
            <img src={bg} alt="" /> 
            <div className="overlay"/>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
