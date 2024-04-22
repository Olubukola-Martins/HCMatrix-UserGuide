import { Link } from "react-router-dom";
import greater from "../../assets/user/greaterThan.svg";

const NavMenu = ({ category, subcategory, nestedCategory, article }) => {
  return (
    <div className="mb-10 text-customGray-lighter hidden  md:flex ">
      {/* This is to go back to the homepage */}
      <Link to="/">
        <p className="navLinks">All Categories</p>
      </Link>

      {/* If there is a category */}
      {category && (
        <div className="flex gap-3 ">
          <img src={greater} alt="" className="mx-5 h-full" />
          <Link
            to={subcategory ? `/category/${category}` : `/articles/${category}`}
          >
            <p className="navLinks">{category}</p>
          </Link>
        </div>
      )}

      {/* This is if there is a subcategory */}
      {subcategory && (
        <div className="flex gap-3 ">
          <img src={greater} alt="" className="mx-5 h-full" />
          <Link
            to={
              nestedCategory
                ? `/category/${category}/${subcategory}/nested`
                : `/category/${category}/${subcategory}`
            }
          >
            <p className="navLinks">{subcategory}</p>
          </Link>
        </div>
      )}

      {/* If there is a nested Category  */}
      {nestedCategory && (
        <div className="flex gap-3 ">
          <img src={greater} alt="" className="mx-5 h-full" />
          <Link
            to={`/category/${category}/${subcategory}/nested/${nestedCategory}`}
          >
            <p className="navLinks">{nestedCategory}</p>
          </Link>
        </div>
      )}

      {/* if there is an article*/}
      {article && (
        <div className="flex gap-3 border">
          <img src={greater} alt="" className="mx-5 h-full" />
          <Link>
            <p className="navLinks">{article}</p>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavMenu;
