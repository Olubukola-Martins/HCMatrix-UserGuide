import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const FloatingInput = ({ name, onChange, value, placeHolder, type }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  if (type === "password") {
    return (
      <div className="entryarea">
        <input
          type={open === true ? "text" : "password"}
          className="float_input border"
          onChange={onChange}
          value={value}
          name={name}
        />
        <div className="labelLine">{placeHolder}</div>
        <div className="evilEye">
          {open === false ? (
            <AiFillEyeInvisible
              className="text-[#D3D3D3] cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <AiFillEye
              className="text-[#D3D3D3] cursor-pointer"
              onClick={toggle}
            />
          )}
        </div>
      </div>
    );
  }

  if (type === "datalist") {
  }

  return (
    <div className="entryarea">
      <input
        type={type}
        className="float_input border"
        onChange={onChange}
        value={value}
        name={name}
      />
      <div className="labelLine">{placeHolder}</div>
    </div>
  );
};
export default FloatingInput;
