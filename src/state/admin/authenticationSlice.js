import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      name: "seth Odior",
      email: "sethOdior@gmail.com",
      status: "Accepted",
    },
    {
      name: "seth Odior",
      email: "sethOdior@gmail.com",
      status: "Accepted",
    },
    {
      name: "seth Odior",
      email: "sethOdior@gmail.com",
      status: "pending",
    },
    {
      name: "seth Odior",
      email: "sethOdior@gmail.com",
      status: "rejected",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
