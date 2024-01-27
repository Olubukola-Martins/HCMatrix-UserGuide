import { Link } from "react-router-dom";
import { wavingHand, lock } from "../assets/categories";

const dummy = {
  svg: wavingHand,
  title: "Sign up and sign in",
  description:
    "Help your user learn more about the basic of your product and how they can get started",
  articlesNo: 7,
};

const CategoryCard = ({ category }) => {
  const { svg, title, description, articles, status } = category;

  const icon = svg;

  if (status === "active") {
    return (
      <div className="rounded-lg  bg-white px-4 py-6 customShadow box-border h-[16.5rem] flex flex-col items-center">
        <img src={icon} className="h-8 mb-3" alt="" />
        <Link>
          <h3 className="text-lg font-bold mb-3">{title}</h3>
        </Link>
        <p className="text-center text-customGray-light font-semibold mb-4">
          {description}
        </p>
        <span>{articles?.length}</span>
      </div>
    );
  }

  return (
    <div className="rounded-lg  bg-white px-4 py-6 customShadow box-border h-[16.5rem] flex flex-col items-center relative overflow-hidden">
      <img src={dummy.svg} className="h-8 mb-3" alt="" />
      <Link>
        <h3 className="text-lg font-bold mb-3">{dummy.title}</h3>
      </Link>
      <p className="text-center text-customGray-light font-semibold mb-4">
        {dummy.description}
      </p>
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
