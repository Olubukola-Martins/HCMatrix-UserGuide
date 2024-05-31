import React, { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import Wrapper from "../Wrapper";
import { Link, useNavigate } from "react-router-dom";
import { Fluent, ViewFinder } from "../../../assets/admin/icons/dashboard";
import { Hamburger } from "../../../assets/admin/icons/dashboard";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../state/admin/adminData/thunkFunctions";
import { getSingleCategory } from "../../../state/admin/adminData/adminData";
import { NoData } from "../../common";
import { Logo } from "../../../assets/admin/images";
import { LogoutHandler } from "../../../state/admin/authenticationSlice";
import { resetHeaderNav } from "../../../state/admin/headerSlice";
import { useMediaQuery } from "../../../hooks/common";
import styled from "styled-components";

import {
  AppstoreOutlined,
  SettingOutlined,
  BulbOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
  DesktopOutlined,
  UserOutlined,
  LockOutlined,
  KeyOutlined,
} from "@ant-design/icons";

const SideModal = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  const { mainCategories, loadingCategory } = useSelector(
    (store) => store.adminData
  );
  const dispatch = useDispatch();

  const navigationHandler = (name, type) => {
    if (type && type.toLowerCase() === "settings") {
      if (name.toLowerCase() === "create category") {
        navigate(`/admin/setting`);
      }

      if (name.toLowerCase() === "look & data") {
        navigate(`/admin/setting/overview`);
      }

      if (name.toLowerCase() === "manage members") {
        navigate("/admin/setting/manageuser");
      }

      return;
    }

    if (type && type.toLowerCase() === "admin") {
      if (name.toLowerCase() === "change password") {
        navigate(`/auth/change-password`);
        return;
      }

      if (name.toLowerCase() === "logout") {
        dispatch(LogoutHandler());
        dispatch(resetHeaderNav());
        navigate("/auth/login");
      }

      return;
    }

    navigate(
      `${
        name.toLowerCase() === "/admin/dashboard" ? "" : `${name.toLowerCase()}`
      }`
    );
  };

  const categoryHandler = (id) => {
    onClose();
    dispatch(getSingleCategory({ id }));
    navigate("/admin/dashboard");
  };

  const placeHolder = [1, 2, 3, 4, 5];

  const items = [
    {
      key: "Admin",
      label: "Admin",
      icon: <UserOutlined />,
      children: [
        {
          key: "Change Password",
          label: "Change Password",
          icon: <LockOutlined />,
        },
        {
          key: "Logout",
          label: "Logout",
          icon: <KeyOutlined />,
        },
      ],
    },
    ...(!isAboveSmallScreens
      ? [
          {
            key: "Dashboard",
            label: "Dashboard",
            icon: <AppstoreOutlined />,
          },
          {
            type: "divider",
          },
          {
            key: "Insight",
            label: "Insight",
            icon: <BulbOutlined />,
          },
          {
            type: "divider",
          },
          {
            key: "Settings",
            label: "Settings",
            icon: <SettingOutlined />,
            children: [
              {
                key: "Create Category",
                label: "Create Category",
                icon: <PlusCircleOutlined />,
              },
              {
                key: "Look & Data",
                label: "Look & Data",
                icon: <DesktopOutlined />,
              },
              {
                key: "Manage Members",
                label: "Manage Members",
                icon: <UsergroupAddOutlined />,
              },
            ],
          },
        ]
      : []),
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    const path = e.keyPath;
    const name = e.key;
    onClose();
    navigationHandler(name, path[1]);
  };

  const StyledMenu = styled(Menu)`
    .ant-menu-item-selected {
      background-color: transparent !important;
    }

    .ant-menu-item-selected a {
      color: black !important;
    }
  `;

  return (
    <>
      <Hamburger onClick={showDrawer} />
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        onClose={onClose}
        open={open}
        width={300}
        extra={<img className=" h-10" src={Logo} />}
        footer={
          <div className="mt-5">
            <span className="mb-3 font-semibold">Preview</span>
            <Link to="/" target="blank">
              <Wrapper className="activeindicator flex gap-2 items-center justify-center mt-2 hover:cursor-pointer">
                <Fluent />
                <span>Show live website</span>
                <ViewFinder />
              </Wrapper>
            </Link>
          </div>
        }
      >
        <span className="text-[17px]  block w-full mb-2 font-normal text-customGray-fade">
          {user?.email}
        </span>
        <StyledMenu
          onClick={onClick}
          className="font-body"
          style={{
            width: "100%",
            borderRight: "none",
            borderLeft: "none",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />

        <h3 className="my-3 text-sm font-semibold">All Categories</h3>
        <div
          className={` max-h-[40vh] overflow-y-scroll  pb-2 ${
            mainCategories.length === 0 &&
            !loadingCategory &&
            "grid place-items-center mt-6"
          }`}
        >
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
          ) : mainCategories.length !== 0 ? (
            <section className="">
              {mainCategories.map((category, index) => {
                const { emoji, name, active, id } = category;

                return (
                  <Wrapper
                    onClickHandler={() => categoryHandler(id)}
                    className={`flex transition-all border-[1.2px] border-transparent duration-100 ease-linear justify-between items-center px-3 py-2 rounded-lg hover:cursor-pointer ${
                      active ? "activeindicator font-semibold shadow-md" : ""
                    }`}
                    key={id}
                  >
                    <div className="flex gap-4 items-center">
                      <span className="text-[14px]">{emoji?.code}</span>
                      <h3 className="text-[16px] capitalize">{name}</h3>
                    </div>
                  </Wrapper>
                );
              })}
            </section>
          ) : (
            <NoData msg="No Category!!!" />
          )}
        </div>
      </Drawer>
    </>
  );
};
export default SideModal;
