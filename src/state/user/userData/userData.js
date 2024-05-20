import { createSlice } from "@reduxjs/toolkit";
import {
  getMainCategoriesForUser,
  getSubcategoriesForUser,
  getCategoryArticlesUser,
} from "./thunkFunction";
import { placeholder } from "../../../assets/admin/icons/settings";

const initialState = {
  allCategoriesUser: [],
  mainCategoriesUser: [],
  subcategoriesUser: [],
  leastCategoriesUser: [],
  isLoading: false,
  ids: { main: "", sub: "", least: "" },
  articles: [],
  articleContent: {},
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetHandler: (state, actions) => {
      const location = actions.payload;
      if (location === "main") {
        state.ids = { main: "", sub: "", least: "" };
        state.subcategoriesUser = [];
        state.leastCategoriesUser = [];
        state.articleContent = {};
        state.articles = [];
      }

      if (location === "sub") {
        state.ids = { ...state.ids, sub: "", least: "" };
        state.articleContent = {};
        state.articles = [];
      }

      if (location === "least") {
        state.articles = [];
        state.articleContent = {};
        state.ids = { ...state.ids, least: "" };
      }

      if (location === "articles") {
        state.articleContent = {};
      }
    },
    idHandler: (state, actions) => {
      const { type, id } = actions.payload;
      state.ids = { ...state.ids, [type]: id };
    },

    setArticleContent: (state, actions) => {
      const id = actions.payload;

      const article = state.articles.find((article) => {
        return article.id === id;
      });

      state.articleContent = article;
    },
    getNestedCategory: (state, actions) => {
      const id = actions.payload;
      const least = state.subcategoriesUser.find((each) => {
        return each.id === id;
      }).children;
      state.leastCategoriesUser = least;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMainCategoriesForUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMainCategoriesForUser.fulfilled, (state, action) => {
        state.mainCategoriesUser = [
          ...action.payload.data.result,
          { placeholder: true },
          { placeholder: true },
          { placeholder: true },
        ];
        state.isLoading = false;
      })
      .addCase(getMainCategoriesForUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getSubcategoriesForUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSubcategoriesForUser.fulfilled, (state, action) => {
        const sub = action.payload.data.result;

        state.subcategoriesUser = sub.filter((category) => {
          return category.parentId === state.ids.main;
        });

        state.isLoading = false;
      })
      .addCase(getSubcategoriesForUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCategoryArticlesUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategoryArticlesUser.fulfilled, (state, action) => {
        const articles = action.payload.data.result;
        state.articles = articles;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getCategoryArticlesUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { idHandler, setArticleContent, resetHandler, getNestedCategory } =
  userDataSlice.actions;

export default userDataSlice.reducer;
