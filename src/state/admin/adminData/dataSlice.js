import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../../../data/data";
import {
  getAllCategories,
  getEmojis,
  createNewCategory,
  getSubCategories,
} from "./thunkFunctions";

const init = {
  categoryName: "",
  description: "",
  emojiId: "",
  parentName: "",
};

const initialState = {
  loadingCategory: false,
  loadingAddCategory: false,
  error: false,
  success: false,
  message: "",
  categories: categories,
  emoji: [],
  allCategories: [],
  mainCategories: [],
  subcategories: [],
  leastSubcategories: [],
  category: [],
  singleCategory: {},
  singleArticle: {},
  active: false,
  addNew: {
    categoryName: "",
    description: "",
    emojiId: "",
    parentName: "",
  },
};

const categorySlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    getMainCategory: (state, action) => {},

    // To Get a specific subcategory
    getSpecificSubcategory: (state, action) => {
      const id = action.payload;
      const sub = state.allCategories.find((category) => {
        return category.id === Number(id);
      })?.children;
      state.subcategories = sub;

      if (!sub) {
        state.leastSubcategories = [];
        return;
      }
      state.subcategories = sub;
    },

    // To get specifics least subcategory
    getSpecificLeastSubcategory: (state, action) => {
      const id = action.payload;
      const least = state.allCategories.find((category) => {
        return category.id === Number(id);
      })?.children;

      if (!least) {
        state.leastSubcategories = [];
        return;
      }
      state.leastSubcategories = least;
    },

    // This is to get single category
    getSingleCategory: (state, action) => {
      const { id, page } = action.payload;
      const setActive = state.mainCategories.map((category) => {
        if (category.id === id) {
          return { ...category, active: true };
        } else {
          return { ...category, active: false };
        }
      });
      state.mainCategories = setActive;
    },

    // This is to handle the action thingy
    actionModalToggler: (state, action) => {
      const { title } = action.payload;
      state.singleCategory.articles.map((article) => {
        return { ...article, toggle: false };
      });

      state.singleCategory?.articles.map((article) => {
        if (title === article.title) {
          article.toggle = !article.toggle;
        }
      });
    },

    // New category data handler
    newCategoryDataHandler: (state, action) => {
      const { name, value } = action.payload;
      state.addNew = { ...state.addNew, [name]: value };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.loadingCategory = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        const categories = action.payload.data.result;

        const main = categories
          .filter((category) => {
            return category.type === "main";
          })
          .map((each, index) => {
            if (index === 0) {
              return { ...each, active: true };
            }
            return { ...each, active: false };
          });

        state.allCategories = categories;
        state.mainCategories = main;
        state.loadingCategory = false;
        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loadingCategory = false;
        state.error = action.payload;
      })
      .addCase(getEmojis.fulfilled, (state, action) => {
        const emoji = action.payload;
        state.emoji = emoji.data;
        state.error = null;
      })
      .addCase(getEmojis.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createNewCategory.pending, (state, action) => {
        state.loadingAddCategory = true;
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        state.loadingAddCategory = false;
        state.addNew = init;
        state.error = null;
      })
      .addCase(createNewCategory.rejected, (state, action) => {
        state.loadingAddCategory = false;
        state.addNew = init;
        state.error = action.payload;
      });
  },
});

export const {
  getSingleCategory,
  actionModalToggler,
  newCategoryDataHandler,
  getMainCategory,
  getSpecificSubcategory,
  getSpecificLeastSubcategory,
} = categorySlice.actions;
export default categorySlice.reducer;
