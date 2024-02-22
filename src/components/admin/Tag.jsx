import { close } from "../../assets/admin/icons/settings";

const Tag = ({ tagName }) => {
  return (
    <div className="bg-customGray-tag px-2 py-1 gap-2 flex rounded-md text-customGray-lightest items-center  ">
      <p className="text-[14px]">{tagName}</p>
      <img
        src={close}
        alt="close tag"
        width={20}
        height={20}
        className="-mb-[3px]"
      />
    </div>
  );
};

export default Tag;
