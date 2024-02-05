import { Link } from "react-router-dom";
import greater from "../assets/greaterThan.svg";

const NavMenu = ({
  category,
  subcategory,
  nestedCategory,
  articles,
  article,
  nested,
}) => {
  console.log(category, subcategory, nestedCategory, articles, article, nested);
  return (
    <div className="mb-10 text-customGray-lighter flex">
      <Link to="/">
        <span className="hover:border-b-2 hover:pb-2 transition-all ease-out duration-100">
          All Categories
        </span>
      </Link>

      {category && !articles && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link to={`/category/${category}`}>
            <span className="capitalize hover:border-b-2 hover:pb-2 ease-out  transition-all duration-100">
              {category}
            </span>
          </Link>
        </div>
      )}

      {category && articles && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link to={`/articles/${category}`}>
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {category}
            </span>
          </Link>
        </div>
      )}

      {subcategory && !nestedCategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link to={`/category/${category}/${subcategory}`}>
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {subcategory}
            </span>
          </Link>
        </div>
      )}

      {subcategory && nestedCategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link to={`/category/${category}/${subcategory}/nested`}>
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {subcategory}
            </span>
          </Link>
        </div>
      )}

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

      {articles && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link>
            <span className="capitalize hover:border-b-2 ease-out  hover:pb-2 transition-all duration-100">
              {articles}
            </span>
          </Link>
        </div>
      )}

      {/* {article && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3 " />
          <Link>
            <span className="capitalize hover:border-b-2 hover:pb-2 ease-out  transition-all duration-100">
              {article}
            </span>
          </Link>
        </div>
      )} */}
    </div>
  );
};
export default NavMenu;
