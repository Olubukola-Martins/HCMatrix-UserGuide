import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import { SidePanel } from "./layout";

import { AddBtn } from "../../assets/admin/icons/dashboard";

const SideMenu = () => {
  const { category } = useSelector((store) => store.adminCategory);

  return (
    <SidePanel>
      <Wrapper className="flex bg-white justify-center items-center gap-2 mb-4 cursor-pointer">
        <AddBtn />
        <span>New Article</span>
      </Wrapper>
      <h3 className="mb-4">All Categories</h3>
      <div>
        {category.map((category, index) => {
          const { svg, title, articles, active } = category;

          return (
            <Wrapper
              className={`flex justify-between items-center px-3  ${
                active
                  ? "bg-[#F2f2f2] shadow-sm border-[1.2px] border-white"
                  : ""
              }`}
              key={title}
            >
              <div className="flex gap-4 items-center">
                <img src={svg} alt="" className="h-5" />
                <h3 className="text-[17px] capitalize">{title}</h3>
              </div>
              <span className="font-light">{`${articles?.length} Articles`}</span>
            </Wrapper>
          );
        })}
      </div>
    </SidePanel>
  );
};
export default SideMenu;
