import back from "../../assets/user/back.svg";
import { useNavigate } from "react-router-dom";

const Back = ({ home, category, subcategory, article, nestedCategory }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    //From the article to all articles
    if (!nestedCategory && !subcategory && category && article) {
      navigate(`/articles/${category}`);
      return;
    }

    //From the article to the subcategory with no nested route
    if (!nestedCategory && category && subcategory && article) {
      navigate(`/category/${category}/${subcategory}`);
      return;
    }

    //From the article to the nestedCategory articles if there are nested category
    if (category && subcategory && nestedCategory && article) {
      navigate(`/category/${category}/${subcategory}/nested/${nestedCategory}`);
      return;
    }

    //From the article to the nestedCategory if there are nested category
    if (category && subcategory && nestedCategory) {
      navigate(`/category/${category}/${subcategory}/nested`);
      return;
    }

    // from nested or articles to the category component
    if (category && subcategory) {
      navigate(`/category/${category}`);
      return;
    }

    if (article && !home) {
      navigate("/");
    }

    //Going to the home page
    home && navigate("/");
  };

  return (
    <div
      className="group flex text-l text-customGray-dark items-center gap-[6px] md:gap-2 cursor-pointer"
      onClick={() => onClickHandler()}
    >
      <img src={back} alt="" className="h-[.8rem] md:h-[1rem]" />
      {home ? (
        <p className="text-[12px] md:text-[15px] ">Back To Home</p>
      ) : (
        <p className="">Back </p>
      )}
    </div>
  );
};
export default Back;
