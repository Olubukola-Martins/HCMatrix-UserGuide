import { Link } from "react-router-dom";
import greater from "../../assets/user/greaterThan.svg";

const NavMenu = ({ category, subcategory, nestedCategory, article }) => {
  return (
    <div className="mb-10 text-customGray-lighter hidden  md:flex ">
      {/* This is to go back to the homepage */}
      <Link to="/">
        <span className="navLinks">All Categories</span>
      </Link>

      {/* If there is a category */}
      {category && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="mx-5" />
          <Link
            to={subcategory ? `/category/${category}` : `/articles/${category}`}
          >
            <span className="navLinks">{category}</span>
          </Link>
        </div>
      )}

      {/* This is if there is a subcategory */}
      {subcategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="mx-5" />
          <Link
            to={
              nestedCategory
                ? `/category/${category}/${subcategory}/nested`
                : `/category/${category}/${subcategory}`
            }
          >
            <span className="navLinks">{subcategory}</span>
          </Link>
        </div>
      )}

      {/* If there is a nested Category  */}
      {nestedCategory && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="mx-5 " />
          <Link
            to={`/category/${category}/${subcategory}/nested/${nestedCategory}`}
          >
            <span className="navLinks">{nestedCategory}</span>
          </Link>
        </div>
      )}

      {/* if there is an article*/}
      {article && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="mx-5 " />
          <Link>
            <span className="navLinks">{article}</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavMenu;
