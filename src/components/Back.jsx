import back from "../assets/back.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Back = ({ route }) => {
  const navigate = useNavigate();

  const onClickHandler = (routing) => {
    navigate(`${routing ? `/${routing}` : `/`}`);
  };

  return (
    <div
      className="flex text-l text-customGray-dark items-center gap-3 cursor-pointer"
      onClick={() => onClickHandler(route)}
    >
      <img src={back} alt="" className="h-5" />
      {route ? <p>Back</p> : <p>Back To Home</p>}
    </div>
  );
};
export default Back;
