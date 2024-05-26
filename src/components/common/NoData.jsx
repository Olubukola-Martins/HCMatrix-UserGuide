import { empty } from "../../assets/common/svg";

const NoData = ({ className, msg, padding, whiteText }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${padding}`}>
      <img
        src={empty}
        alt=""
        className={`${className ? className : "h-16 mb-5 mr-3"}`}
      />
      <span
        className={`font-extralight ${
          whiteText ? "text-white" : " text-customRed-light"
        } `}
      >
        {msg}
      </span>
    </div>
  );
};
export default NoData;
