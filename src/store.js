import { configureStore } from "@reduxjs/toolkit";

// FOR THE USER
import categoryReducer from "./state/user/Category/categorySlice";

// FOR THE ADMIN
import adminHeaderReducer from "./state/admin/headerSlice";
import adminCategoryReducer from "./state/admin/adminCategorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    adminHeader: adminHeaderReducer,
    adminCategory: adminCategoryReducer,
  },
});

export default store;
