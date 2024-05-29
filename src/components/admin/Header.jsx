// // IMPORT UI
// import Container from "./Container";

// //ICONS & IMAGES
// import {
//   admin,
//   dashboardicon,
//   insighticon,
//   settingsicon,
// } from "../../assets/admin/icons/header";

// import { Logo, adminLogo } from "../../assets/admin/images";

// //REDUX HOOKS
// import { useSelector, useDispatch } from "react-redux";

// //NAVIGATION
// import { useNavigate } from "react-router";

// //Redux Actions
// import { navigation, settingsNavigation } from "../../state/admin/headerSlice";
// import { adminModalToggle } from "../../state/admin/modalSlice";
// import { AuthModal } from "./modals";

// import {
//   CreateIcon,
//   LookIcon,
//   MemberIcon,
// } from "../../assets/admin/icons/headerSetting";
// import { SideModal } from "./layout";

// const Header = () => {
//   const { navMenu, settingsMenu, barToggle } = useSelector(
//     (store) => store.adminHeader
//   );
//   const { adminModal } = useSelector((store) => store.modelSlice);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onClickHandler = (name, type) => {
//     if (type === "menu") {
//       navigate(
//         `${
//           name.toLowerCase() === "/admin/dashboard"
//             ? ""
//             : `${name.toLowerCase()}`
//         }`
//       );
//       dispatch(navigation(name));
//       return;
//     }

//     if (type === "settings") {
//       if (name.toLowerCase() === "create category") {
//         navigate(`/admin/setting`);
//       }

//       if (name.toLowerCase() === "look & data") {
//         navigate(`/admin/setting/overview`);
//       }

//       if (name.toLowerCase() === "manage members") {
//         navigate("/admin/setting/manageuser");
//       }
//       dispatch(settingsNavigation(name));
//     }
//   };

//   return (
//     <header className="fixed top-0 w-full z-[99] bg-white  shadow-md pt-8 pb-7 grid font-semibold text-customGray-dark place-items-center text-[15px]">
//       <Container>
//         {/* Main Menu */}
//         <div className="flex justify-between">
//           <div className="flex w-[60%] gap-5">
//             <img
//               src={adminLogo}
//               alt="logo"
//               className="scale-105 h-[2.7rem] mr-5"
//             />
//             <div className="hidden md:flex justify-between gap-6">
//               {navMenu.map((menu, index) => {
//                 const { icon, name, active } = menu;

//                 return (
//                   <div
//                     key={index}
//                     onClick={() => onClickHandler(name, "menu")}
//                     className={`flex items-center transition-all duration-150 ease-linear text-[#3A3A3AE5] gap-[0.5rem] px-4 rounded-md cursor-pointer ${
//                       active ? "bg-adminBG" : ""
//                     }`}
//                   >
//                     <div>
//                       <img
//                         className="h-4 -mt-[1px]"
//                         src={
//                           name === "Dashboard"
//                             ? dashboardicon
//                             : name === "Insight"
//                             ? insighticon
//                             : settingsicon
//                         }
//                         alt=""
//                       />
//                     </div>
//                     <span
//                       className={`${
//                         active ? "font-semibold" : "font-medium "
//                       } text-[#3A3A3AE5]  text-[14px]`}
//                     >
//                       {name}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* The Admin */}
//           <SideModal />

//           <div
//             className="hidden md:flex items-center gap-2 cursor-pointer"
//             onClick={() => dispatch(adminModalToggle())}
//           >
//             <span>Admin</span>
//             <img src={admin} alt="" />
//           </div>
//         </div>

//         {adminModal && <AuthModal />}

//         {/* Settings Sub Menu */}
//         {barToggle && (
//           <div className="flex border-t mt-5 gap-16 justify-center text-customGray-fade items-center pt-4">
//             {settingsMenu.map((menu, index) => {
//               const { name, active } = menu;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => onClickHandler(name, "settings")}
//                   className={`flex  items-center gap-2 pb-1 transition-all duration-100 ease-linear  cursor-pointer ${
//                     active
//                       ? "text-adminHighlight border-b pb-1 border-adminHighlight"
//                       : ""
//                   }`}
//                 >
//                   {name === "create category" ? (
//                     <CreateIcon />
//                   ) : name === "look & data" ? (
//                     <LookIcon />
//                   ) : (
//                     <MemberIcon />
//                   )}

//                   <span className="capitalize text-[12px]">{name}</span>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </Container>
//     </header>
//   );
// };
// export default Header;

import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
// import "antd/dist/antd.css"; // Import Ant Design styles

import Container from "./Container";

// ICONS & IMAGES
import {
  admin,
  dashboardicon,
  insighticon,
  settingsicon,
} from "../../assets/admin/icons/header";

import { Logo, adminLogo } from "../../assets/admin/images";

// REDUX HOOKS
import { useSelector, useDispatch } from "react-redux";

// NAVIGATION
import { useNavigate } from "react-router";

// Redux Actions
import { navigation, settingsNavigation } from "../../state/admin/headerSlice";
import { adminModalToggle } from "../../state/admin/modalSlice";
import { AuthModal } from "./modals";

import { useMediaQuery } from "../../hooks/common";

import {
  CreateIcon,
  LookIcon,
  MemberIcon,
} from "../../assets/admin/icons/headerSetting";
import { SideModal } from "./layout";

const Header = () => {
  const { navMenu, settingsMenu, barToggle } = useSelector(
    (store) => store.adminHeader
  );
  const { adminModal } = useSelector((store) => store.modelSlice);

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

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
    <header className="fixed top-0 w-full z-[99] bg-white shadow-md pt-5 pb-4 md:pt-8 md:pb-7 grid font-semibold text-customGray-dark place-items-center text-[15px]">
      <Container>
        <div className="flex justify-between">
          <div className="flex w-[60%] gap-5">
            <img
              src={adminLogo}
              alt="logo"
              className="scale-105 h-[2.7rem] mr-5"
            />
            <div className="hidden sm:flex justify-between gap-6">
              {navMenu.map((menu, index) => {
                const { icon, name, active } = menu;

                return (
                  <div
                    key={index}
                    onClick={() => onClickHandler(name, "menu")}
                    className={`flex items-center transition-all duration-150 ease-linear text-[#3A3A3AE5] gap-[0.5rem] px-4 rounded-md cursor-pointer ${
                      active ? "bg-adminBG" : ""
                    }`}
                  >
                    <div>
                      <img
                        className="h-[14px] -mt-[1px]"
                        src={
                          name === "Dashboard"
                            ? dashboardicon
                            : name === "Insight"
                            ? insighticon
                            : settingsicon
                        }
                        alt=""
                      />
                    </div>
                    <span
                      className={`${
                        active ? "font-semibold" : "font-medium "
                      } text-[#3A3A3AE5]  text-[14px]`}
                    >
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hamburger Menu for Drawer */}
          {/* <Button type="primary" onClick={showDrawer} className="md:hidden">
            <MenuUnfoldOutlined />
          </Button> */}

          {!isAboveMediumScreens && <SideModal />}

          {/* The Admin */}

          <div
            className="hidden md:flex items-center gap-2 cursor-pointer"
            onClick={() => dispatch(adminModalToggle())}
          >
            <span>Admin</span>
            <img src={admin} alt="" />
          </div>
        </div>

        {adminModal && <AuthModal />}

        {/* Settings Sub Menu */}
        {isAboveMediumScreens && barToggle && (
          <div className="flex border-t mt-5 gap-16 justify-center text-customGray-fade items-center pt-4">
            {settingsMenu.map((menu, index) => {
              const { name, active } = menu;

              return (
                <div
                  key={index}
                  onClick={() => onClickHandler(name, "settings")}
                  className={`flex  items-center gap-2 pb-1 transition-all duration-100 ease-linear  cursor-pointer ${
                    active
                      ? "text-adminHighlight border-b pb-1 border-adminHighlight"
                      : ""
                  }`}
                >
                  {name === "create category" ? (
                    <CreateIcon />
                  ) : name === "look & data" ? (
                    <LookIcon />
                  ) : (
                    <MemberIcon />
                  )}

                  <span className="capitalize text-[12px]">{name}</span>
                </div>
              );
            })}
          </div>
        )}
      </Container>

      {/* Drawer */}
      {/* <Drawer
        title="Navigation Menu"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
      >
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          {navMenu.map((menu, index) => (
            <Menu.Item
              key={index}
              icon={React.createElement(
                menu.name === "Dashboard"
                  ? UserOutlined
                  : menu.name === "Insight"
                  ? VideoCameraOutlined
                  : UploadOutlined
              )}
              onClick={() => {
                onClickHandler(menu.name, "menu");
                onClose();
              }}
            >
              {menu.name}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer> */}
    </header>
  );
};

export default Header;
