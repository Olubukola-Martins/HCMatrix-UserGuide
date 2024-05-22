import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/AxiosInstance";
import { toast } from "react-toastify";

export const createNewArticle = createAsyncThunk(
  "article/newArticle",
  async (newArticle) => {
    try {
      let categoryId;

      const {
        articleDescription,
        articleTitle,
        category,
        leastSubcategory,
        subcategory,
        videoLink,
        body,
      } = newArticle;

      leastSubcategory
        ? (categoryId = leastSubcategory)
        : subcategory
        ? (categoryId = subcategory)
        : (categoryId = category);

      const formattedArticle = {
        title: articleTitle,
        description: articleDescription,
        categoryId: Number(categoryId),
        body: body,
      };

      if (videoLink?.trim() !== "") {
        formattedArticle.videoUrl = videoLink;
      }

      const response = await axiosInstance.post(`/articles`, formattedArticle);
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editArticle = createAsyncThunk(
  "article/editArticle",
  async (article) => {
    try {
      console.log(article, "unformatted article");
      const { body, description, id, title, videoUrl, categoryId } = article;

      const formattedArticle = {
        title: title,
        description: description,
        categoryId,
        body,
      };

      if (videoUrl.trim() !== "") {
        formattedArticle.videoUrl = videoUrl;
      }

      const response = await axiosInstance.put(
        `/articles/${id}`,
        formattedArticle
      );
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCategoryArticles = createAsyncThunk(
  "article/categoryArticles",
  async (categoryId) => {
    try {
      const response = await axiosInstance.get(
        `/categories/${categoryId}/articles`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);


export const disableArticlesHandler = createAsyncThunk(
  "article/disable",
  async (articleId) => {
    try {
      console.log(articleId);
      const response = await axiosInstance.patch(
        `/articles/${articleId}/publish`
      );
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const findSingleArticle = createAsyncThunk(
  "article/find",
  async (articleId) => {
    try {
      const response = await axiosInstance.get(`/articles/${articleId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
