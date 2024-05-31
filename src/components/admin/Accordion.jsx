import { useDispatch } from "react-redux";
import {
  placeholder,
  down,
  upload,
  link,
} from "../../assets/admin/icons/settings";
import { accordionToggler } from "../../state/admin/customizationSlice";
import Wrapper from "./Wrapper";
import { Button, Upload } from "antd";
import { toast } from "react-toastify";
import {
  uploadImage,
  sendUrlToBackend,
} from "../../state/admin/customizationSlice";
import { Input } from "antd";

const Accordion = ({ name, desc, type, id, toggle }) => {
  const dispatch = useDispatch();

  const closeAccordionHandler = () => {
    dispatch(accordionToggler(id));
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    dispatch(uploadImage(file))
      .unwrap()
      .then((url) => {
        onSuccess(url, file);

        dispatch(sendUrlToBackend({ id, url }))
          .then((res) => {
            res.data && toast.success("Image uploaded successfully");
          })
          .catch((err) => {
            toast.error("Upload failed, Please try again.");
          });
      })
      .catch((err) => {
        onError(err);
        toast.error("Upload failed, Please try again.");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={type === "footer" ? link : placeholder} alt="" />
          <h3 className="font-semibold text-customGray-dark">{name}</h3>
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
      {/* 
      {type !== "footer" && toggle && (
        <div className="w-[60%] xs:w-[50%] sm:w-[60%] md:w-[35%] py-14 px-6 mb-3 rounded-lg bg-customGray-upload transition-all duration-75 ease-in">
          <Wrapper className="rounded-lg bg-white px-3">
            <Upload customRequest={customRequest}>
              <Button>
                <div className="flex gap-2 items-center">
                  <img src={upload} alt="" className="ml-1 h-4" />
                  {`Upload ${name}`}
                </div>
              </Button>
            </Upload>
          </Wrapper>
          <span className="text-[12px] block text-center mt-2 text-customGray-fade font-semibold">
            PNG or JPEG up to 2mb
          </span>
        </div>
      )} */}

      {type !== "footer" && toggle && (
        <div className="xs:w-[50%] sm:w-[50%] md:w-[30%] lg:w-[35%]  py-10 px-4 sm:py-12 sm:px-5 md:py-14 md:px-6 mb-3 rounded-lg bg-customGray-upload transition-all duration-75 ease-in">
          <Wrapper className="rounded-lg bg-white px-2 sm:px-3 grid place-items-center">
            <Upload customRequest={customRequest}>
              <Button>
                <div className="flex gap-2 items-center">
                  <img src={upload} alt="" className="ml-1 h-4" />
                  {`Upload ${name}`}
                </div>
              </Button>
            </Upload>
          </Wrapper>
          <span className="text-[12px] block text-center mt-2 text-customGray-fade font-semibold">
            PNG or JPEG up to 2mb
          </span>
        </div>
      )}

      {type === "footer" && toggle && (
        <div className="w-full py-2 px-6 mb-3 rounded-lg flex flex-col gap-5">
          <div className="flex w-full gap-10">
            <Input placeholder="Our Website" size="large" />
            <Input placeholder="www.hcmatrix.com" />
          </div>
          <div className="flex  w-full gap-10">
            <Input placeholder="Blog" size="large" />
            <Input placeholder="http//:hcmatrix/blog" />
          </div>
          <div className="flex  w-full gap-10">
            <Input placeholder="follow us" size="large" />
            <Input placeholder="http//:follow-us/LinkedIn" />
          </div>
          <div className="flex  w-full gap-10">
            <Input placeholder="contact us" size="large" />
            <Input placeholder="http://contact-us-page" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Accordion;
