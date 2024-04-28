import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../data/data";
import { articles } from "../../../data/articles";

const initialState = {
  allArticles: articles,
  newArticle: {},
  categories: categories,
  content: "",
  editedContent: {},
  editing: false,
  singleArticle: {},
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getSingleArticle: (state, actions) => {
      const { name, category } = actions.payload;

      const findOne = articles.find((article) => {
        return article.articleTitle
          .toLocaleLowerCase()
          .includes(name.toLocaleLowerCase());
      });

      state.singleArticle = findOne;
    },
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
      console.log(content);
      state.newArticle = {};
    },
    editContent: (state, actions) => {
      state.editedContent = { ...another };
      state.content = another.content;
    },
  },
});

export const {
  populateNewArticle,
  addContent,
  articleContentHandler,
  editContent,
  getSingleArticle,
} = articleSlice.actions;
export default articleSlice.reducer;
