import ToggleBtn from "./ToggleBtn";

const Toggler = ({ desc, svg, title, active, id }) => {
  return (
    <div className="py-3 rounded-lg mt-4 px-6 border bg-[#F2F2F2]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={svg} alt="" className="h-5 font-bold" />
          <h3 className="text-md font-bold capitalize">{title}</h3>
        </div>

        <ToggleBtn active={active} id={id} />
      </div>
      <span className="text-[13px] font-semibold text-customGray-light leading-none">
        {desc}
      </span>
    </div>
  );
};
export default Toggler;
