import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminModal: false,
};

const modelSlice = createSlice({
  name: "modalHandler",
  initialState,
  reducers: {
    adminModalToggle: (state, action) => {
      state.adminModal = !state.adminModal;
    },
  },
});

export const { adminModalToggle } = modelSlice.actions;
export default modelSlice.reducer;
