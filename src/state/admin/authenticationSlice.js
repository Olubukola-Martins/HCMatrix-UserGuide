import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import axiosInstance from "../../services/AxiosInstance";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.BASE;

export const loginUser = createAsyncThunk(
  "auth/login",

  async (userCredential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/auth/`, userCredential);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  error: "",
  loading: false,
  user: null,
  message: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = JSON.parse(action.payload);
    },
    getAccessToken: (state, action) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.data.accessToken) {
        state.token = user.data.accessToken;
      } else {
        console.error("Access token not found in local storage");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentUser, getAccessToken } = authSlice.actions;
export default authSlice.reducer;
