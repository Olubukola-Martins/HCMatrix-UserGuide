import { configureStore } from "@reduxjs/toolkit";

// FOR THE USER
import categoryReducer from "./state/user/usercategory/categorySlice";

// FOR THE ADMIN
import adminHeaderReducer from "./state/admin/headerSlice";
import adminCategoryReducer from "./state/admin/adminCategorySlice";
import authenticationReducer from "./state/admin/authenticationSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    adminHeader: adminHeaderReducer,
    adminCategory: adminCategoryReducer,
    auth: authenticationReducer,
  },
});

export default store;
