import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/data";

const initialState = {
  newArticle: {},
  store: [],
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
      const content = actions.payload;
      alert("content is working");
      state.store = [...state.store, { ...state.newArticle, content }];

      console.log(state.store);
      // state.categories = categories.map((item) => {
      //   const { articles } = item;
      //   if (item.title === state.newArticle.category) {
      //     const update = articles.push(state.newArticle);
      //     return { ...item, articles: update };
      //   } else {
      //     return { ...item };
      //   }
      // });

      state.newArticle = {};
    },
  },
});

export const { populateNewArticle, addContent } = articleSlice.actions;
export default articleSlice.reducer;
