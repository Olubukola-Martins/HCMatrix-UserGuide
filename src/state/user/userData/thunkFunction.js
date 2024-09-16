import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/AxiosInstance";

export const getMainCategoriesForUser = createAsyncThunk(
  "userData/mainCategory",
  async () => {
    try {
      const response = await axiosInstance.get(
        `/categories/?limit=1000&category_type=Main`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSubcategoriesForUser = createAsyncThunk(
  "userData/subcategories",
  async () => {
    try {
      const response = await axiosInstance.get(
        `/categories/?limit=1000&category_type=Sub`
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCategoryArticlesUser = createAsyncThunk(
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



export const findSingleArticle = createAsyncThunk(
  "userData/find",
  async (articleId) => {
    try {
      const response = await axiosInstance.get(`/articles/${articleId}`);
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchArticle = createAsyncThunk(
  "userData/search",
  async (searchWord) => {
    try {
      const response = await axiosInstance.get(
        `/articles?search=${searchWord}`
      );

      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
