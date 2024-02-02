import { Link } from "react-router-dom";
import greater from "../assets/greaterThan.svg";

const NavMenu = ({ category, subCategory, articles }) => {
  return (
    <div className="mb-10 text-customGray-lighter flex">
      <Link to="/">All Categories</Link>
      {category && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link>
            <span className="capitalize">{category}</span>
          </Link>
        </div>
      )}

      {subCategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link>
            <span className="capitalize">{subCategory}</span>
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
