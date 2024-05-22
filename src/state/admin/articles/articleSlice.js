import { createSlice } from "@reduxjs/toolkit";

import {
  createNewArticle,
  editArticle,
  getCategoryArticles,
  disableArticlesHandler,
  findSingleArticle,
} from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
  allArticles: [],
  newArticle: {},
  content: "",
  editingArticle: {},
  editing: false,
  singleArticle: {},
  singleCategoryArticles: [],
  articleInfo: {},
  loading: false,
  loadingArticle: false,
  error: false,
  message: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    reset: (state, actions) => {
      state.editing = false;
      state.articleInfo = {};
      state.editingArticle = {};
    },
    clearContent: (state, actions) => {
      state.content = "";
      state.editing = false;
    },
    articleContentHandler: (state, actions) => {
      const content = actions.payload;
      state.content = content;
      state.editing
        ? (state.editingArticle = { ...state.editingArticle, body: content })
        : (state.newArticle = { ...state.newArticle, body: content });
    },
    populateNewArticle: (state, actions) => {
      const form = actions.payload;
      state.newArticle = { ...form };
    },
    populateEditingArticle: (state, actions) => {
      const { articleTitle, articleDescription, videoLink } = actions.payload;
      const { categoryId, body, id, ...others } = state.editingArticle;
      state.editingArticle = {
        title: articleTitle,
        description: articleDescription,
        videoUrl: videoLink,
        categoryId,
        id,
        body,
      };
    },
    clearNewArticle: (state, actions) => {
      state.newArticle = {};
      state.editedContent = {};
      state.editing = false;
    },

    editContent: (state, actions) => {
      const id = actions.payload;
      const singleArticleForEdit = state.singleCategoryArticles.find(
        (article) => {
          return article.id === id;
        }
      );

      const { body, ...removedContent } = singleArticleForEdit;
      state.editingArticle = { ...singleArticleForEdit };
      state.editing = true;
      state.content = body;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewArticle.pending, (state, action) => {
        state.loading = true;
        state.loadingCategory = true;
      })
      .addCase(createNewArticle.fulfilled, (state, action) => {
        state.loadingCategory = true;
        toast.success("Article created successfully");
        state.loading = false;
        state.content = "";
        state.error = false;
      })
      .addCase(createNewArticle.rejected, (state, action) => {
        state.message = "There was an error";
        state.loading = false;
        state.message = "Something went wrong!";
      })
      .addCase(editArticle.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(disableArticlesHandler.pending, (state, action) => {})
      .addCase(disableArticlesHandler.fulfilled, (state, action) => {
        toast.success("Articles Disabled");
      })
      .addCase(disableArticlesHandler.rejected, (state, action) => {
        toast.error("Something went wrong ");
      })
      .addCase(editArticle.fulfilled, (state, action) => {
        toast.success("Article Updated successfully");
        state.loading = false;
        state.content = "";
        state.editing = false;
        state.editingArticle = {};
        state.error = false;
      })
      .addCase(editArticle.rejected, (state, action) => {
        state.message = "There was an error";
        state.loading = false;
        state.message = "Something went wrong!";
      })
      .addCase(getCategoryArticles.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCategoryArticles.fulfilled, (state, action) => {
        const articles = action.payload.data.result;
        state.singleCategoryArticles = articles;
        state.loading = false;
        state.content = "";
        state.error = false;
      })
      .addCase(getCategoryArticles.rejected, (state, action) => {
        state.message = "There was an error";
        state.loading = false;
        state.message = "Something went wrong!";
      })
      .addCase(findSingleArticle.pending, (state, action) => {
        state.loadingArticle = true;
      })
      .addCase(findSingleArticle.fulfilled, (state, actions) => {
        const article = actions.payload.data;
        state.articleInfo = article;
        const { body, ...removedContent } = state.articleInfo;
        state.editingArticle = { ...article };
        state.editing = true;
        state.content = body;
        state.loadingArticle = false;
        state.error = false;
      })
      .addCase(findSingleArticle.rejected, (state, action) => {
        state.message = "There was an error";
        state.loadingArticle = false;
      });
  },
});

export const {
  populateNewArticle,

  articleContentHandler,
  editContent,
  reset,
  clearNewArticle,
  clearContent,
  populateEditingArticle,
} = articleSlice.actions;
export default articleSlice.reducer;
