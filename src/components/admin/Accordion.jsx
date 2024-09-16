import { useDispatch, useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";
import { useCallback, useState } from "react";
import { placeholder, down, upload, link } from "../../assets/admin/icons/settings";
import { accordionToggler } from "../../state/admin/customizationSlice";
import Wrapper from "./Wrapper";
import { Form, Upload, Input, Button } from "antd";
import { toast } from "react-toastify";
import { uploadImage, sendUrlToBackend } from "../../state/admin/customizationSlice";
import { useUpdateFooterLinks } from "../../hooks/admin/useUpdateFooterLinks";
import FormItem from "antd/es/form/FormItem";

const Accordion = ({ name, desc, type, id, toggle }) => {
  const dispatch = useDispatch();
  const [footerLinkToEdit, setFooterLinkToEdit] = useState();
  const { settings } = useSelector((store) => store.customization);
  const getInitialLink = useCallback(
    (urlName) => {
      return settings?.footerLinks.find((link) => link.name === urlName)?.url;
    },
    [settings]
  );
  const { loading: updatingFooterLinks, updateFooterLinks } = useUpdateFooterLinks();

  const onFinish = (values) => {
    const footerLinks = Object.keys(values)
      .filter((key) => values[key])
      .map((key) => ({
        name: key,
        url: values[key],
      }));

    if (footerLinks.length === 0) {
      toast.error("No URL was inputted for change");
    } else {
      updateFooterLinks(footerLinks);
    }
  };

  const closeAccordionHandler = () => {
    dispatch(accordionToggler(id));
  };

  const handleSetFooterLink = (footerLink) => {
    footerLink === footerLinkToEdit ? setFooterLinkToEdit() : setFooterLinkToEdit(footerLink);
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
        <button onClick={() => closeAccordionHandler()} className="outline-none border-none">
          <img src={down} alt="" className={`${!toggle ? "translate -rotate-90" : ""}`} />
        </button>
      </div>
      <p className="my-3 text-[14px] text-customGray-fade font-semibold">{desc}</p>
      <hr className="mb-3" />

      {type !== "footer" && toggle && (
        <div className="xs:w-[50%] sm:w-[50%] md:w-[35%] lg:w-[35%]  py-10 px-4 sm:py-12 sm:px-5 md:py-14 md:px-6 mb-3 rounded-lg bg-customGray-upload transition-all duration-75 ease-in">
          <Wrapper className="rounded-lg bg-white  px-2 sm:px-3 grid place-items-center">
            <Upload customRequest={customRequest}>
              <Button>
                <div className="flex gap-2 items-center">
                  <img src={upload} alt="" className="ml-1 h-4" />
                  {`Upload ${name}`}
                </div>
              </Button>
            </Upload>
          </Wrapper>
          <span className="text-[12px] block text-center mt-2 text-customGray-fade font-semibold">PNG or JPEG up to 2mb</span>
        </div>
      )}

      {type === "footer" && toggle && (
        <Form onFinish={onFinish} className="w-full py-2 px-6 mb-3 rounded-lg flex flex-col gap-5">
          <div className="flex w-full gap-8">
            <Input placeholder="Our Website" size="large" value={"Our Website"} disabled />
            <FormItem noStyle name={"website"} initialValue={getInitialLink("website")}>
              <Input placeholder="http://example-hcmatrix.com" defaultValue={getInitialLink("website")} disabled={!(footerLinkToEdit === "website")} />
            </FormItem>
            <FaPen size={40} className="text-gray-400 cursor-pointer" onClick={() => handleSetFooterLink("website")} />
          </div>
          <div className="flex  w-full gap-8">
            <Input placeholder="Blog" size="large" value={"Blog"} disabled />
            <FormItem noStyle name={"blog"} initialValue={getInitialLink("blog")}>
              <Input placeholder="http://example-hcmatrix/blog.com" defaultValue={getInitialLink("blog")} disabled={!(footerLinkToEdit === "blog")} />
            </FormItem>
            <FaPen size={40} className="text-gray-400 cursor-pointer" onClick={() => handleSetFooterLink("blog")} />
          </div>
          <div className="flex  w-full gap-8">
            <Input placeholder="Follow us" size="large" value={"Follow us"} disabled />
            <FormItem noStyle name={"follow_us"} initialValue={getInitialLink("follow_us")}>
              <Input placeholder="http://example-follow-us/LinkedIn.com" defaultValue={getInitialLink("follow_us")} disabled={!(footerLinkToEdit === "follow_us")} />
            </FormItem>
            <FaPen size={40} className="text-gray-400 cursor-pointer" onClick={() => handleSetFooterLink("follow_us")} />
          </div>
          <div className="flex  w-full gap-8">
            <Input placeholder="Contact us" size="large" value={"Contact us"} disabled />
            <FormItem noStyle name={"contact_us"} initialValue={getInitialLink("contact_us")}>
              <Input placeholder="http://example-contact-us-page.com" defaultValue={getInitialLink("contact_us")} disabled={!(footerLinkToEdit === "contact_us")} />
            </FormItem>
            <FaPen size={40} className="text-gray-400 cursor-pointer" onClick={() => handleSetFooterLink("contact_us")} />
          </div>
          <FormItem className="self-end">
            <Button htmlType="submit" className="w-fit text-white font-semibold bg-[#097C37]" loading={updatingFooterLinks}>
              Save Changes
            </Button>
          </FormItem>
        </Form>
      )}
    </div>
  );
};
export default Accordion;
