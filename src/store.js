import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./state/user/Category/categorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
