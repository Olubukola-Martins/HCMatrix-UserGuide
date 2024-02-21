import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/data";

const initialState = {
  categories: categories,
  category: [],
  singleCategory: {},
  singleArticle: {},
  active: false,
};

const adminCategorySlice = createSlice({
  name: "adminCategory",
  initialState,
  reducers: {
    getSingleCategory: (state, action) => {
      const { title, page } = action.payload;

      const setActive = state.category.map((category) => {
        if (category.title === title) {
          return { ...category, active: true };
        } else {
          return { ...category, active: false };
        }
      });

      const noArticles = setActive.filter((category) => {
        return category.articles.length !== 0;
      });

      const single = state.category.find((category) => {
        return category.title === title;
      });

      state.category = page === "insight" ? noArticles : setActive;
      state.singleCategory = single;
    },
    getAllCategories: (state, action) => {
      const { page } = action.payload;

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

      const insight = active.filter((category) => {
        return category.articles.length !== 0;
      });

      const single = active.find((category) => {
        return category.active === true;
      });

      state.singleCategory = single;
      state.category = page === "insight" ? insight : active;
    },
  },
});

export const { getSingleCategory, getAllCategories } =
  adminCategorySlice.actions;
export default adminCategorySlice.reducer;
