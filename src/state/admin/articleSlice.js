import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/data";

const initialState = {
  newArticle: {},
  store: [],
  categories: categories,
  content: "",
  editedContent: {},
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleContentHandler: (state, actions) => {
      const content = actions.payload;
      state.content = content;
    },
    populateNewArticle: (state, actions) => {
      const form = actions.payload;
      state.newArticle = { ...form };
    },
    addContent: (state, actions) => {
      const content = actions.payload;
      state.store = [...state.store, { ...state.newArticle, content }];
      state.newArticle = {};
    },
    editContent: (state, actions) => {},
  },
});

export const { populateNewArticle, addContent, articleContentHandler } =
  articleSlice.actions;
export default articleSlice.reducer;
