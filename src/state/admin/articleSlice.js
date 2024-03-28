import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/data";

const initialState = {
  newArticle: {},
  categories: categories,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    populateNewArticle: (state, actions) => {
      alert("populate still working why?");
      const form = actions.payload;
      state.newArticle = { ...form };
    },
    addContent: (state, actions) => {
      // const content = actions.payload;
      const content = "this is the content";
      alert("content is working");
      state.newArticle = {};
      // state.categories = categories.map((item) => {
      //   if (item.title === state.newArticle.category) {
      //     return { ...item, articles: article.push(state.newArticle) };
      //   } else {
      //     return { ...item };
      //   }
      // });
    },
  },
});

export const { populateNewArticle, addContent } = articleSlice.actions;
export default articleSlice.reducer;
