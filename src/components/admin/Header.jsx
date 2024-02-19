// IMPORT UI
import Container from "./Container";

//ICONS & IMAGES
import { DashboardIcon, Admin } from "../../assets/admin/icons/header";
import { Logo } from "../../assets/admin/images";

//REDUX HOOKS
import { useSelector, useDispatch } from "react-redux";

//Redux Actions
import { navigation, settingsNavigation } from "../../state/admin/headerSlice";

import { CreateIcon } from "../../assets/admin/icons/headerSetting";

const Header = () => {
  const { navMenu, settingsMenu, barToggle } = useSelector(
    (store) => store.adminHeader
  );
  const dispatch = useDispatch();

  const onClickHandler = (name, type) => {
    if (type === "menu") {
      dispatch(navigation(name));
      return;
    }

    if (type === "settings") {
      dispatch(settingsNavigation(name));
    }
  };

  return (
    <nav className="bg-white transition-all ease-out duration-500 shadow-md py-7 grid font-semibold text-customGray-dark place-items-center text-[15px]">
      <Container>
        <div className="flex justify-between">
          <div className="flex w-[60%] gap-5">
            <img src={Logo} alt="logo" className=" h-12" />
            <div className="flex justify-between gap-6">
              {navMenu.map((menu, index) => {
                const { icon, name, active } = menu;
                const Icon = icon;
                return (
                  <div
                    key={index}
                    onClick={() => onClickHandler(name, "menu")}
                    className={`flex items-center gap-2 px-5 rounded-md cursor-pointer ${
                      active ? "bg-adminBG" : ""
                    }`}
                  >
                    <div>
                      <Icon />
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
          <div className="flex items-center gap-2">
            <span>Admin</span>
            <Admin />
          </div>
        </div>

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
                  <Icon className="text-black" />
                  <span className="capitalize text-[14px]">{name}</span>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </nav>
  );
};
export default Header;
