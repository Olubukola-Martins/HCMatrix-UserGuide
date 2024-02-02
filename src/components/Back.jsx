import back from "../assets/back.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Back = ({ route, home, category, subCategory, articles }) => {
  const navigate = useNavigate();

  console.log(category, subCategory, articles);

  const onClickHandler = () => {
    category && subCategory && navigate(`/${category}`);

    category &&
      subCategory &&
      articles &&
      navigate(`/${category}/${subCategory}`);

    home && navigate("/");
  };

  return (
    <div
      className="flex text-l text-customGray-dark items-center gap-3 cursor-pointer"
      onClick={() => onClickHandler()}
    >
      <img src={back} alt="" className="h-5" />
      {home ? <p>Back To Home</p> : <p>Back </p>}
    </div>
  );
};
export default Back;
