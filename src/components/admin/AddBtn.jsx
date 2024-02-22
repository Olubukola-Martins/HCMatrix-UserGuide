import { add } from "../../assets/admin/icons/settings";

const AddBtn = () => {
  return (
    <button className="flex gap-2 cursor-pointer center border-gray-100  border-[1px] p-2 rounded-md max-w-[75px]">
      <img src={add} alt="add icon" height={20} />
      <p className="text-md text-customGray-fade ">Add</p>
    </button>
  );
};
export default AddBtn;
