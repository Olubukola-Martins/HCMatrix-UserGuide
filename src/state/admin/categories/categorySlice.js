import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categories } from "../../../data/data";
import {
  getEveryCategory,
  getEmojis,
  createNewCategory,
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
    newCategoryDataHandler: (state, action) => {
      console.log("working");
      const { name, value } = action.payload;
      state.addNew = { ...state.addNew, [name]: value };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEveryCategory.pending, (state, action) => {
        state.loadingCategory = true;
      })
      .addCase(getEveryCategory.fulfilled, (state, action) => {
        const categories = action.payload;
        state.allCategories = categories.data.result;
        state.loadingCategory = false;
        state.error = null;
      })
      .addCase(getEveryCategory.rejected, (state, action) => {
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
  getAllCategories,
  actionModalToggler,
  newCategoryDataHandler,
} = categorySlice.actions;
export default categorySlice.reducer;
