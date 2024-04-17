import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.BASE;

export const loginUser = createAsyncThunk(
  "auth/login",

  async (userCredential, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://api.staging.hcmatrix.com/v1/user-guide//auth/`,
        userCredential
      );

      console.log(response?.data?.message);
      // toast.success(response?.data?.message);

      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  error: "",
  loading: false,
  user: null,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = JSON.parse(action.payload);
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

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
