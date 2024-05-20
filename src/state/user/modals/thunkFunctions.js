import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/AxiosInstance";

export const articleReview = createAsyncThunk(
  "userModal/review",
  async (feedback) => {
    const { id, ...others } = feedback;

    
    const value = { ...others };
    try {
      const response = await axiosInstance.post(
        `/articles/${id}/feedback`,
        value
      );
      return response.data;
    } catch (error) {
      toast.error("Something went wrong");
      return rejectWithValue(error.response.data);
    }
  }
);
