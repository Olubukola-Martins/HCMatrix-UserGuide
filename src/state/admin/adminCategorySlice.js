import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/data";

const initialState = {
  categories: categories,
  category: [],
  singleCategory: {},
  active: false,
};

const adminCategorySlice = createSlice({
  name: "adminCategory",
  initialState,
  reducers: {
    getSingleCategory: (state, action) => {
      const single = state.category.find((category) => {
        return category.active === true;
      });
      state.singleCategory = single;
    },
    getAllCategories: (state, action) => {
      const active = state.categories
        .map((category, index) => {
          if (category.status === "active") {
            if (index === 0) {
              return { ...category, active: true };
            } else {
              return { ...category, active: false };
            }
          }
        })
        .filter((category) => category !== undefined);

      const single = active.find((category) => {
        return category.active === true;
      });

      state.singleCategory = single;
      state.category = active;
    },
  },
});

export const { getSingleCategory, getAllCategories } =
  adminCategorySlice.actions;
export default adminCategorySlice.reducer;
