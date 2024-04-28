import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import axiosInstance from "../../services/AxiosInstance";

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
      toast.error("An Error occurred");
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  error: "",
  loading: false,
  user: null,
  loginMessage: "",
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
    LogoutHandler: (state, action) => {
      state.user = null;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const res = action.payload;
        state.loginMessage = res.message;
        state.user = res.data.user;
        state.token = res.data.accessToken;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentUser, getAccessToken, LogoutHandler } =
  authSlice.actions;
export default authSlice.reducer;
