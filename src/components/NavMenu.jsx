import { Link } from "react-router-dom";
import greater from "../assets/greaterThan.svg";

const NavMenu = ({ articles, article }) => {
  return (
    <div className="mb-10 text-customGray-lighter flex">
      <Link to="/">All Categories</Link>
      {articles && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link>
            <span className="">{articles}</span>
          </Link>
        </div>
      )}

      {article && (
        <div className="flex gap-3">
          <img src={greater} alt="" className="ml-3" />
          <Link>
            <span className="">{article}</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavMenu;
