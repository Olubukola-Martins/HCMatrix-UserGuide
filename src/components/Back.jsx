import back from "../assets/back.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Back = ({ home, category, subcategory, articles, nestedCategory }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    //From the article to all articles
    if (!nestedCategory && !subcategory && category && articles) {
      navigate(`/articles/${category}`);
      return;
    }

    //From the article to the subcategory with no nested route
    if (!nestedCategory && category && subcategory && articles) {
      navigate(`/category/${category}/${subcategory}`);
      return;
    }

    //From the article to the nestedCategory articles if there are nested category
    if (category && subcategory && nestedCategory && articles) {
      navigate(`/category/${category}/${subcategory}/nested/${nestedCategory}`);
      return;
    }

    //From the article to the nestedCategory if there are nested category
    if (category && subcategory && nestedCategory) {
      navigate(`/category/${category}/${subcategory}/nested`);
      return;
    }

    // console.log(nestedRoute);
    // nestedRoute &&
    //   nestedCategory &&
    //   category &&
    //   subcategory &&
    //   navigate(`/category/${category}/${subcategory}/nested`);

    // From the category to the home
    // if (!nestedCategory && category) {
    //   console.log("From the category to the home");
    //   navigate(`/category/${category}`);
    //   return;
    // }

    // from nested or articles to the category component
    if (category && subcategory) {
      navigate(`/category/${category}`);
      return;
    }

    //Going to the home page
    home && navigate("/");
  };

  return (
    <div
      className="flex text-l text-customGray-dark items-center gap-3 cursor-pointer"
      onClick={() => onClickHandler()}
    >
      <img src={back} alt="" className="h-5" />
      {home ? <p>Back To Home</p> : <p>Back </p>}
    </div>
  );
};
export default Back;
