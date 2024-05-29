import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMenu: [
    { name: "Dashboard", active: true },
    { name: "Insight", active: false },
    { name: "Setting", active: false },
  ],
  barToggle: false,
  settingsMenu: [
    { name: "create category", active: true },
    { name: "look & data", active: false },
    { name: "Manage Members", active: false },
  ],
  showHeader: true,
};

const adminHeaderSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetHeaderNav: (state, action) => {
      const nav = state.navMenu.map((menu, index) => {
        if (index === 0) {
          return { ...menu, active: true };
        }
        return { ...menu, active: false };
      });

      // TO RESET THE SETTING
      const settingNav = state.settingsMenu.map((menu, index) => {
        if (index === 0) {
          return { ...menu, active: true };
        }
        return { ...menu, active: false };
      });

      state.barToggle = false;
      state.navMenu = nav;
      state.settingsMenu = settingNav;
    },
    navigation: (state, action) => {
      const name = action.payload;
      const nav = state.navMenu.map((menu) => {
        if (name === menu.name) {
          return { ...menu, active: true };
        }
        return { ...menu, active: false };
      });

      // TO RESET THE SETTING
      const settingNav = state.settingsMenu.map((menu, index) => {
        if (index === 0) {
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
      state.settingsMenu = settingNav;
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

export const { navigation, settingsNavigation, headerToggle,resetHeaderNav } =
  adminHeaderSlice.actions;
export default adminHeaderSlice.reducer;
