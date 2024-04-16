import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  placeholder,
  down,
  upload,
  link,
} from "../../assets/admin/icons/settings";
import { accordionToggler } from "../../state/admin/customizationSlice";

import Wrapper from "./Wrapper";

const Accordion = ({ name, desc, type, id, toggle }) => {
  //   const {} = useSelector((store) => store.customization);
  const dispatch = useDispatch();

  const closeAccordionHandler = () => {
    dispatch(accordionToggler(id));
  };

  const inputRef = useRef(null);

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file, such as uploading it
    console.log("Selected file:", file);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={type === "footer" ? link : placeholder} alt="" />
          <h3 className="font-semibold">{name}</h3>
        </div>
        <button
          onClick={() => closeAccordionHandler()}
          className="outline-none border-none"
        >
          <img
            src={down}
            alt=""
            className={`${!toggle ? "translate -rotate-90" : ""}`}
          />
        </button>
      </div>
      <p className="my-3 text-[14px] text-customGray-fade font-semibold">
        {desc}
      </p>
      <hr className="mb-3" />

      {toggle && (
        <div className="w-[35%] py-14 px-6 mb-3 rounded-lg bg-customGray-upload">
          <Wrapper>
            <div className="flex items-center relative gap-2 w-[95%] mx-auto">
              <input
                type="file"
                className="absolute opacity-0"
                ref={inputRef}
                onChange={handleFileChange}
                onClick={(event) => event.stopPropagation()}
              />

              <div
                onClick={handleUploadClick}
                className="flex gap-2 items-center pl-1"
              >
                <img src={upload} alt="" className="ml-1" />
                <span className="font-bold text-md">Upload Image</span>
              </div>
            </div>
          </Wrapper>
          <span className="text-[12px] block text-center mt-2 text-customGray-fade font-semibold">
            PNG or JPEG up to 2mb
          </span>
        </div>
      )}
    </div>
  );
};
export default Accordion;
