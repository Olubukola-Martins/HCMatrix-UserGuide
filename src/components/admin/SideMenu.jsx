import Wrapper from "./Wrapper";

import { useSelector, useDispatch } from "react-redux";
import { SidePanel } from "./layout";
import { Link } from "react-router-dom";

import { getSingleCategory } from "../../state/admin/adminCategorySlice";
import { newArticleModalToggle } from "../../state/admin/modalSlice";

import { Fluent, ViewFinder } from "../../assets/admin/icons/dashboard";

import { AddBtn } from "../../assets/admin/icons/dashboard";

const SideMenu = ({ page, title: pageTitle }) => {
  const { category } = useSelector((store) => store.adminCategory);
  const dispatch = useDispatch();

  const onClickHandler = (title) => {
    // console.log(page, title, "This is the insight");
    dispatch(getSingleCategory({ title, page }));
  };

  return (
    <SidePanel>
      <h3 className="mb-3 text-lg">{pageTitle}</h3>
      {page === "dashboard" && (
        <Wrapper
          className="flex bg-white justify-center rounded-lg items-center gap-2 mb-4 cursor-pointer"
          onClickHandler={() => dispatch(newArticleModalToggle())}
        >
          <AddBtn />
          <span>New Article</span>
        </Wrapper>
      )}

      <h3 className="mb-4">All Categories</h3>
      <div>
        {category.map((category, index) => {
          const { svg, title, articles, active } = category;

          return (
            <Wrapper
              onClickHandler={() => onClickHandler(title)}
              className={`flex transition-all duration-100 ease-linear justify-between items-center px-3 rounded-lg hover:cursor-pointer ${
                active ? "activeindicator" : ""
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

      {page === "dashboard" && (
        <div className="mt-4">
          <span className="mb-3">Preview</span>
          <Link to="/" target="blank">
            <Wrapper className="activeindicator flex gap-2 items-center justify-center mt-2 hover:cursor-pointer">
              <Fluent />
              <span>Show live website</span>
              <ViewFinder />
            </Wrapper>
          </Link>
        </div>
      )}
    </SidePanel>
  );
};
export default SideMenu;
