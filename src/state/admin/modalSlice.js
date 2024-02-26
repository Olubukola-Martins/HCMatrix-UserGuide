import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminModal: false,
  newArticleModal: false,
  accordion: [
    {
      name: "logo",
      desc: "Pick your company logo that will get displayed on your knowledge base platform for users",
      type: "upload",
      id: "logo",
      toggle: false,
    },
    {
      name: "Header Styles",
      desc: "Customize your header  by adding your desired background image to the overlay.",
      type: "upload",
      id: "header",
      toggle: false,
    },
    {
      name: "Footer links",
      desc: "Set the links that will appear in your bottom footer. Leave a roll blank and its wont show up",
      type: "footer",
      id: "header",
      toggle: false,
    },
  ],
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
