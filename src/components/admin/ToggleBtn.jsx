import { useSelector, useDispatch } from "react-redux";
import { toggleHandler } from "../../state/admin/customizationSlice";

const ToggleBtn = ({ id, active }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleHandler(id));
  };

  return (
    <div
      className="w-[41px] px-[0.2rem] h-[22px] flex flex-col justify-center bg-[#097C37] rounded-[50px]"
      onClick={onClickHandler}
    >
      <div
        className={`h-[18.79px] transition-all duration-[5000]  w-[18.79px] bg-white rounded-full ${
          active ? "self-end" : "self-start"
        }`}
      ></div>
    </div>
  );
};
export default ToggleBtn;
