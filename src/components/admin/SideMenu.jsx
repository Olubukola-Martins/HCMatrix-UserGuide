import Wrapper from "./Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { SidePanel } from "./layout";
import { Link } from "react-router-dom";
import { getSingleCategory } from "../../state/admin/adminData/dataSlice";
import { newArticleModalToggle } from "../../state/admin/modalSlice";
import { Fluent, ViewFinder } from "../../assets/admin/icons/dashboard";
import { AddBtn } from "../../assets/admin/icons/dashboard";
import { gear } from "../../assets/user/categories";

const SideMenu = ({ page, title: pageTitle }) => {
  const { mainCategories, loadingCategory } = useSelector(
    (store) => store.adminData
  );
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    dispatch(getSingleCategory({ id, page }));
  };

  const placeHolder = [1, 2, 3, 4, 5];

  return (
    <SidePanel>
      <h3 className="mb-4 text-lg">{pageTitle}</h3>
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
      <div className="min-h-[50vh] max-h-[80vh] overflow-auto pb-2">
        {loadingCategory ? (
          <div>
            {placeHolder.map((each, index) => {
              return (
                <Wrapper
                  key={each}
                  className="skeleton flex border-[1.2px] py-4 mb-2 px-3 rounded-lg"
                >
                  working
                </Wrapper>
              );
            })}
          </div>
        ) : (
          <section>
            {mainCategories.map((category, index) => {
              const { emoji, name, active, id } = category;

              return (
                <Wrapper
                  onClickHandler={() => onClickHandler(id)}
                  className={`flex transition-all border-[1.2px] border-transparent duration-100 ease-linear justify-between items-center px-3 rounded-lg hover:cursor-pointer ${
                    active ? "activeindicator" : ""
                  }`}
                  key={name}
                >
                  <div className="flex gap-4 items-center">
                    {name === "Settings" ? (
                      <img src={gear} alt="" className=" p-1 h-[1.8rem]" />
                    ) : (
                      <span className="text-lg">{emoji?.code}</span>
                    )}
                    <h3 className="text-[16px] capitalize">{name}</h3>
                  </div>
                  {/* <span className="font-light">{`${articles?.length} Articles`}</span> */}
                </Wrapper>
              );
            })}
          </section>
        )}
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
