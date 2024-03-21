import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newArticle: {},
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    populateNewArticle: (state, actions) => {
      const form = actions.payload;
      console.log(form);
    },
  },
});

export const { populateNewArticle } = articleSlice.actions;
export default articleSlice.reducer;
