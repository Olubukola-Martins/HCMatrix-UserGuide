import { Switch } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../state/admin/customizationSlice";
import { toggleHandler } from "../../state/admin/customizationSlice";
import { useMediaQuery } from "../../hooks/common";

const Toggler = ({ desc, svg, title, id }) => {
  const dispatch = useDispatch();
  const { settings, loading } = useSelector((store) => store.customization);

  const getDefaultChecked = (title) => {
    if (title.toLowerCase().includes("suggested")) {
      return settings.showSuggestedArticles;
    } else if (title.toLowerCase().includes("contact")) {
      return settings.showContactButton;
    } else if (title.toLowerCase().includes("powered")) {
      return settings.showPoweredBadge;
    }
    return false;
  };

  const toggleFunc = (checked) => {
    dispatch(toggleHandler(id));
    dispatch(toggle({ title, checked }));
  };

  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <div className="py-3 rounded-lg mt-4 px-6 border bg-[#F2F2F2]">
      <div className="flex justify-between items-center mb-3 sm:mb-1">
        <div className="flex gap-2 items-center">
          <img src={svg} alt="" className="h-5 font-bold" />
          <h3 className="text-[15px] md:text-md text-customGray-dark font-bold capitalize">
            {title}
          </h3>
        </div>

        <Switch
          size={isAboveSmallScreens ? "large" : "small"}
          className="!bg-[#097C37]"
          defaultChecked={getDefaultChecked(title)}
          loading={loading}
          onChange={toggleFunc}
        />
      </div>
      <span className="text-[13px] font-semibold text-customGray-light leading-none">
        {desc}
      </span>
    </div>
  );
};
export default Toggler;
