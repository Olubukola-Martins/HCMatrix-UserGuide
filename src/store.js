import { configureStore } from "@reduxjs/toolkit";

// FOR THE USER
import categoryReducer from "./state/user/usercategory/categorySlice";

// FOR THE ADMIN
import adminHeaderReducer from "./state/admin/headerSlice";
import adminDataHandlingReducer from "./state/admin/adminDataSlice";
import authenticationReducer from "./state/admin/authenticationSlice";
import customizationReducer from "./state/admin/customizationSlice";
import modalReducer from "./state/admin/modalSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    adminHeader: adminHeaderReducer,
    adminCategory: adminDataHandlingReducer,
    auth: authenticationReducer,
    customization: customizationReducer,
    modelSlice: modalReducer,
  },
});

export default store;
