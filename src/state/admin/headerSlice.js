import { createSlice } from "@reduxjs/toolkit";
import {
  DashboardIcon,
  InsightIcon,
  SettingsIcon,
} from "../../assets/admin/icons/header";

import {
  MemberIcon,
  LookIcon,
  CreateIcon,
} from "../../assets/admin/icons/headerSetting";

const initialState = {
  navMenu: [
    { icon: DashboardIcon, name: "Dashboard", active: true },
    { icon: InsightIcon, name: "Insight", active: false },
    { icon: SettingsIcon, name: "Setting", active: false },
  ],
  barToggle: false,
  settingsMenu: [
    { icon: CreateIcon, name: "create category", active: true },
    { icon: LookIcon, name: "look & data", active: false },
    { icon: MemberIcon, name: "Manage Members", active: false },
  ],
  showHeader: true,
};

const adminHeaderSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    navigation: (state, action) => {
      const name = action.payload;
      const nav = state.navMenu.map((menu) => {
        if (name === menu.name) {
          return { ...menu, active: true };
        }
        return { ...menu, active: false };
      });

      // TO HANDLE THE NESTED BAR
      if (name.toLowerCase() === "setting") {
        state.barToggle = true;
      } else {
        state.barToggle = false;
      }

      state.navMenu = nav;
    },
    settingsNavigation: (state, action) => {
      const name = action.payload;
      const settingNav = state.settingsMenu.map((menu) => {
        if (name === menu.name) {
          return { ...menu, active: true };
        }
        return { ...menu, active: false };
      });

      state.settingsMenu = settingNav;
    },
    headerToggle: (state, action) => {
      const { page } = action.payload;

      if (page === "article") {
        state.showHeader = false;
      } else {
        state.showHeader = true;
      }
    },
  },
});

export const { navigation, settingsNavigation, headerToggle } =
  adminHeaderSlice.actions;
export default adminHeaderSlice.reducer;
