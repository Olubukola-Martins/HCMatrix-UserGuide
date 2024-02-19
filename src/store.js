import { configureStore } from "@reduxjs/toolkit";

// FOR THE USER
import categoryReducer from "./state/user/Category/categorySlice";

// FOR THE ADMIN
import adminHeaderReducer from "./state/admin/headerSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    adminHeader: adminHeaderReducer,
  },
});

export default store;
