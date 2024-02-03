import { Link } from "react-router-dom";
import greater from "../assets/greaterThan.svg";

const NavMenu = ({ category, subcategory, nestedCategory, articles }) => {
  return (
    <div className="mb-10 text-customGray-lighter flex">
      <Link to="/">All Categories</Link>
      {category && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link to={`/${category}`}>
            <span className="capitalize">{category}</span>
          </Link>
        </div>
      )}

      {subcategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link to={`/${category}/${subcategory}`}>
            <span className="capitalize">{subcategory}</span>
          </Link>
        </div>
      )}

      {nestedCategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link to={`/${category}/${subcategory}`}>
            <span className="capitalize">{nestedCategory}</span>
          </Link>
        </div>
      )}

      {articles && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link>
            <span className="capitalize">{articles}</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavMenu;
