import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminModal: false,
  newArticleModal: false,
  showAccordion: false,
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
    toggleAccordion: (state, action) => {
      state.showAccordion = !state.showAccordion;
    },
  },
});

export const { adminModalToggle, newArticleModalToggle, toggleAccordion } =
  modelSlice.actions;
export default modelSlice.reducer;
