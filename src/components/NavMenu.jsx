import { Link } from "react-router-dom";
import greater from "../assets/greaterThan.svg";

const NavMenu = ({
  category,
  subcategory,
  nestedCategory,
  article,
  nested,
}) => {
  console.log(category, subcategory, nestedCategory, article, article, nested);
  return (
    <div className="mb-10 text-customGray-lighter flex">
      {/* This is to go back to the homepage */}
      <Link to="/">
        <span className="hover:border-b-2 hover:pb-2 transition-all ease-out duration-100">
          All Categories
        </span>
      </Link>

      {/* If there is a category */}
      {category && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link
            to={subcategory ? `/category/${category}` : `/articles/${category}`}
          >
            <span className="capitalize hover:border-b-2 hover:pb-2 ease-out  transition-all duration-100">
              {category}
            </span>
          </Link>
        </div>
      )}

      {/* This is if there is a subcategory */}
      {subcategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link to={`/category/${category}/${subcategory}`}>
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {subcategory}
            </span>
          </Link>
        </div>
      )}

      {/* If there is a nested Category  */}
      {nestedCategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link
            to={`/category/${category}/${subcategory}/nested/${nestedCategory}`}
          >
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {nestedCategory}
            </span>
          </Link>
        </div>
      )}

      {/* if there is an article  */}
      {article && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link>
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {article}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavMenu;
