// IMPORT UI
import Container from "./Container";

//ICONS & IMAGES
import { admin } from "../../assets/admin/icons/header";
import { Logo } from "../../assets/admin/images";

//REDUX HOOKS
import { useSelector, useDispatch } from "react-redux";

//NAVIGATION
import { useNavigate } from "react-router";

//Redux Actions
import { navigation, settingsNavigation } from "../../state/admin/headerSlice";
import { adminModalToggle } from "../../state/admin/modalSlice";

import { AuthModal } from "./modals";

// import { CreateIcon } from "../../assets/admin/icons/headerSetting";

const Header = () => {
  const { navMenu, settingsMenu, barToggle } = useSelector(
    (store) => store.adminHeader
  );
  const { adminModal } = useSelector((store) => store.modelSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (name, type) => {
    if (type === "menu") {
      navigate(
        `${
          name.toLowerCase() === "/admin/dashboard"
            ? ""
            : `${name.toLowerCase()}`
        }`
      );
      dispatch(navigation(name));
      return;
    }

    if (type === "settings") {
      if (name.toLowerCase() === "create category") {
        navigate(`/admin/setting`);
      }

      if (name.toLowerCase() === "look & data") {
        navigate(`/admin/setting/overview`);
      }

      if (name.toLowerCase() === "manage members") {
        navigate("/admin/setting/manageuser");
      }
      dispatch(settingsNavigation(name));
    }
  };

  return (
    <header className="mb-8 bg-white relative shadow-md py-7 grid font-semibold text-customGray-dark place-items-center text-[15px]">
      <Container>
        {/* Main Menu */}
        <div className="flex justify-between">
          <div className="flex w-[60%] gap-6">
            <img src={Logo} alt="logo" className=" h-12 -ml-5" />
            <div className="flex justify-between gap-6">
              {navMenu.map((menu, index) => {
                const { icon, name, active } = menu;

                return (
                  <div
                    key={index}
                    onClick={() => onClickHandler(name, "menu")}
                    className={`flex items-center gap-2 px-5 rounded-md cursor-pointer ${
                      active ? "bg-adminBG" : ""
                    }`}
                  >
                    <div>
                      <img src={icon} alt="" />
                    </div>
                    <span className="font-semibold text-customGray-dark ">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* The Admin */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => dispatch(adminModalToggle())}
          >
            <span>Admin</span>
            <img src={admin} alt="" />
          </div>
        </div>

        {adminModal && <AuthModal />}

        {/* Settings Sub Menu */}
        {barToggle && (
          <div className="flex border-t-[1px] mt-4 gap-16 justify-center text-customGray-fade items-center pt-4">
            {settingsMenu.map((menu, index) => {
              const { name, icon: Icon, active } = menu;

              return (
                <div
                  key={index}
                  onClick={() => onClickHandler(name, "settings")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    active ? "text-adminHighlight" : ""
                  }`}
                >
                  <Icon />
                  <span className="capitalize text-[14px]">{name}</span>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </header>
  );
};
export default Header;
