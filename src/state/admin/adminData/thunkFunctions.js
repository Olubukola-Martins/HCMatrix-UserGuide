import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/AxiosInstance";
import { toast } from "react-toastify";

export const getAllCategories = createAsyncThunk(
  "adminData/category",
  async () => {
    try {
      const response = await axiosInstance.get(`/categories/?limit=1000`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchCategories = createAsyncThunk(
  "adminData/category",
  async (categoryName) => {
    try {
      const response = await axiosInstance.get(
        `/categories/?search=${categoryName}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMainCategory = createAsyncThunk(
  "adminData/mainCategory",
  async () => {
    try {
      const response = await axiosInstance.get(
        `/categories/?category_type=Main`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSubCategories = createAsyncThunk(
  "adminData/subcategories",
  async () => {
    try {
      const response = await axiosInstance.get(
        `/categories//categories/?category_type=Sub`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLeastCategories = createAsyncThunk(
  "adminData/category",
  async () => {
    try {
      const response = await axiosInstance.get(`/categories/`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getEmojis = createAsyncThunk("adminData/emoji", async () => {
  try {
    const response = await axiosInstance.get(`/utilities/emojis`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const getReviews = createAsyncThunk("adminData/reviews", async (id) => {
  try {
    const response = await axiosInstance.get(`/articles/${id}/feedback`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const getUsers = createAsyncThunk("adminData/users", async () => {
  try {
    const response = await axiosInstance.get(`/user`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export const createNewCategory = createAsyncThunk(
  "adminData/newCategory",
  async (data, thunkAPI) => {
    const { categoryName, description, emojiId, parentName } = data;
    let newCategory;
    const state = thunkAPI.getState().adminData;

    const foundCategory = state.allCategories.find((category) => {
      return category.name === parentName;
    });

    if (!foundCategory) {
      const type = "main";
      const emoji = state?.emoji?.find((each) => {
        return each.code === emojiId;
      })?.id;

      newCategory = {
        name: categoryName,
        description,
        type,
        emojiId: emoji,
      };
    } else {
      const type = foundCategory.type === "main" ? "sub" : "least-sub";
      const emoji = "";
      newCategory = {
        name: categoryName,
        description,
        type,
        parentId: foundCategory.id,
      };
    }

    try {
      const response = await axiosInstance.post(`/categories`, newCategory);

      if (response.data.message) {
        const msg = response.data.message;
        toast.success(msg);
      }
      thunkAPI.dispatch(getAllCategories());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
