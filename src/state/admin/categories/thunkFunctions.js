import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/AxiosInstance";
import { toast } from "react-toastify";

export const getEveryCategory = createAsyncThunk(
  "adminData/category",
  async (thunkAPI) => {
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
      const type = foundCategory.type === "main" ? "sub" : "least_sub";
      const emoji = "";
      newCategory = {
        name: categoryName,
        description,
        type,
        emojiId: "",
        parentId: foundCategory.id,
      };
    }

    console.log(newCategory);

    try {
      const response = await axiosInstance.post(`/categories`);
      if (response.data.message) {
        const msg = response.data.message;
        toast.success(msg);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
      return rejectWithValue(error.response.data);
    }
  }
);
