import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminModal: false,
  newArticleModal: false,
};

const modelSlice = createSlice({
  name: "modalHandler",
  initialState,
  reducers: {
    adminModalToggle: (state, action) => {
      state.adminModal = !state.adminModal;
    },
    newArticleModalToggle: (state, action) => {
      state.newArticleModal = !state.newArticleModal;
    },
  },
});

export const { adminModalToggle, newArticleModalToggle } = modelSlice.actions;
export default modelSlice.reducer;
