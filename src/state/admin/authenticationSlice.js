import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../services/AxiosInstance";
import { json } from "react-router-dom";
const baseUrl = import.meta.env.BASE;

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/auth/`, userCredential);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("An Error occurred");
      return rejectWithValue(error.response.data);
    }
  }
);

export const inviteUser = createAsyncThunk(
  "auth/invite",

  async (userCredential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/user/invite`, userCredential);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("An Error occurred");
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyUser = createAsyncThunk(
  "auth/verify",

  async (userCredential, { rejectWithValue }) => {
    const { token, uid, credentials } = userCredential;
    try {
      const response = await axiosInstance.post(
        `/user/invite/verification?uid=${uid}&token={{${token}}}`,
        credentials
      );
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
  msg: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const user = JSON.parse(action.payload);
      state.user = user?.user;
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
      localStorage.removeItem("user");
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
        const response = action.payload;
        localStorage.setItem("user", JSON.stringify(response.data));
        state.loginMessage = response.message;
        state.user = response.data.user;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        const response = action.payload;
        localStorage.setItem("user", JSON.stringify(response.data));
        state.loginMessage = response.message;
        state.user = response.data.user;
        state.loading = false;
        state.error = null;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(inviteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(inviteUser.fulfilled, (state, action) => {
        const res = action.payload;
        toast.success("Invite sent successfully");
        state.loading = false;
        state.error = null;
      })
      .addCase(inviteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentUser, getAccessToken, LogoutHandler } =
  authSlice.actions;
export default authSlice.reducer;
