import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/AxiosInstance";
import { toast } from "react-toastify";

export const createNewArticle = createAsyncThunk("article/newArticle", async (newArticle) => {
  try {
    let categoryId;

    const { articleDescription, articleTitle, category, leastSubcategory, subcategory, videoLink, body } = newArticle;

    leastSubcategory ? (categoryId = leastSubcategory) : subcategory ? (categoryId = subcategory) : (categoryId = category);

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
});

export const editArticle = createAsyncThunk("article/editArticle", async (article) => {
  try {
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

    const response = await axiosInstance.put(`/articles/${id}`, formattedArticle);
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const getCategoryArticles = createAsyncThunk("article/categoryArticles", async ({ categoryId, offset, limit }, { rejectWithValue }) => {
  const url = `/categories/${categoryId}/articles?offset=${offset}&limit=${limit}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response?.data || "An error occurred");
  }
});

export const disableArticlesHandler = createAsyncThunk("article/disable", async (articleId) => {
  try {
    const response = await axiosInstance.patch(`/articles/${articleId}/publish`);
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const findSingleArticle = createAsyncThunk("article/find", async (articleId) => {
  try {
    const response = await axiosInstance.get(`/articles/${articleId}`);

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
