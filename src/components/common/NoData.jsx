import { empty } from "../../assets/common/svg";

const NoData = ({ className, msg, padding }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${padding}`}>
      <img
        src={empty}
        alt=""
        className={`${className ? className : "h-16 mb-5 mr-3"}`}
      />
      <span className=" font-extralight">{msg}</span>
    </div>
  );
};
export default NoData;
