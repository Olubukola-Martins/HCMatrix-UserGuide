import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategories,
  getEmojis,
  createNewCategory,
  getSubCategories,
  getReviews,
  getUsers,
} from "./thunkFunctions";
import { toast } from "react-toastify";

const init = {
  categoryName: "",
  description: "",
  emojiId: "",
  parentName: "",
};

const initialState = {
  isLoading: false,
  loadingCategory: false,
  loadingAddCategory: false,
  error: false,
  success: false,
  message: "",
  mainCategoryId: "",
  emoji: [],
  allCategories: [],
  users: [],
  mainCategories: [],
  subcategories: [],
  leastSubcategories: [],
  category: [],
  singleCategory: {},
  singleArticle: {},
  reviews: [],
  active: false,
  addNew: {
    categoryName: "",
    description: "",
    emojiId: "",
    parentName: "",
  },
};

const adminDataSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    getMainCategory: (state, action) => {},

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

    getSingleCategory: (state, action) => {
      const { id, page } = action.payload;
      const setActive = state.mainCategories.map((category) => {
        if (category.id === id) {
          return { ...category, active: true };
        } else {
          return { ...category, active: false };
        }
      });

      state.mainCategoryId = setActive.find((category) => {
        return category.active === true;
      }).id;
      state.mainCategories = setActive;
    },

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
        state.mainCategoryId = main.find((category) => {
          return category.active === true;
        })?.id;
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
        console.log(action.payload);
        state.loadingAddCategory = false;
        state.addNew = init;
        state.error = action.payload;
      })
      .addCase(getReviews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data.result;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.data.result;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
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
} = adminDataSlice.actions;
export default adminDataSlice.reducer;
