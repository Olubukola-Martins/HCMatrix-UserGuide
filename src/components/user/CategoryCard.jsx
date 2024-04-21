import { Link } from "react-router-dom";
import { wavingHand, lock } from "../../assets/user/categories";
// import { Articles } from "../../sections/user";
import { useNavigate } from "react-router-dom";

const placeHolder = {
  svg: wavingHand,
  title: "Sign up and sign in",
  description:
    "Help your user learn more about the basic of your product and how they can get started",
  articlesNo: 7,
};

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const base = "articles";

  const { svg, title, description, status, subcategories, articles } = category;

  const navigating = (sub) => {
    if (!sub) {
      navigate(`/articles/${title}`);
      return;
    }
    navigate(`/category/${title}`);
  };

  if (status === "active") {
    return (
      <div className="category__card__container  rounded-lg bg-white customShadow box-border h-auto flex flex-col items-center">
        <img src={svg} className="h-10 md:h-8 mb-3" alt="" />

        <h3
          className="category__card__header"
          onClick={() => navigating(subcategories)}
        >
          {title}
        </h3>

        <p className="category__card__text">{description}</p>

        <span className="category__card__sub">{articles.length} Articles</span>
      </div>
    );
  }

  return (
    <div className="category__card__container  rounded-lg bg-white customShadow box-border h-auto flex flex-col items-center relative overflow-hidden">
      <img src={placeHolder.svg} className="h-9 md:h-8 mb-3" alt="" />
      <Link>
        <h3 className="category__card__header ">{placeHolder.title}</h3>
      </Link>
      <p className="category__card__text">{placeHolder.description}</p>
      <span>0</span>
      <div className="inset-0 blur w-full h-full absolute rounded-lg"></div>
      <div className="absolute z-10 top-[30%] flex flex-col items-center font-bold text-customGray-semiDark">
        <img src={lock} alt="" />
        <h3 className="mt-8">Coming Soon!</h3>
      </div>
    </div>
  );
};
export default CategoryCard;

// <div className="rounded-lg  bg-white px-8 md:py-6 py-8 customShadow box-border h-[16.5rem] flex flex-col items-center ">
//   <img src={svg} className="h-8 mb-3" alt="" />

//   <h3
//     className="text-lg font-bold mb-3 cursor-pointer capitalize"
//     onClick={() => navigating(subcategories)}
//   >
//     {title}
//   </h3>

//   <p className="text-center text-customGray-light font-semibold mb-4">
//     {description}
//   </p>
//   <span className="text-sm text-customGray-semiDark">
//     {articles.length} Articles
//   </span>
// </div>
