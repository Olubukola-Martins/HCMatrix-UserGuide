import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../data/data";

const initialState = {
  categories: categories,
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
