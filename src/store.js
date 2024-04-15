import { configureStore } from "@reduxjs/toolkit";

// FOR THE USER
import categoryReducer from "./state/user/usercategory/categorySlice";

// FOR THE ADMIN
import adminHeaderReducer from "./state/admin/headerSlice";
import adminDataHandlingReducer from "./state/admin/adminDataSlice";
import authenticationReducer from "./state/admin/authenticationSlice";
import customizationReducer from "./state/admin/customizationSlice";
import modalReducer from "./state/admin/modalSlice";
import articleSlice from "./state/admin/articleSlice";
import userModalReducer from "./state/user/modals/userModalSlice";

const store = configureStore({
  reducer: {
    article: articleSlice,
    category: categoryReducer,
    adminHeader: adminHeaderReducer,
    adminCategory: adminDataHandlingReducer,
    auth: authenticationReducer,
    customization: customizationReducer,
    modelSlice: modalReducer,
    userModalSlice: userModalReducer,
  },
});

export default store;
