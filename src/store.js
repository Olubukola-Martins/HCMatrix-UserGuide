import { configureStore } from "@reduxjs/toolkit";

// FOR THE USER
import userDataReducer from "./state/user/userData/userData";

// FOR THE ADMIN
import adminHeaderReducer from "./state/admin/headerSlice";
import adminDataReducer from "./state/admin/adminData/adminData";
import authenticationReducer from "./state/admin/authenticationSlice";
import customizationReducer from "./state/admin/customizationSlice";
import modalReducer from "./state/admin/modalSlice";
import articleSlice from "./state/admin/articles/articleSlice";
import userModalReducer from "./state/user/modals/userModalSlice";

const store = configureStore({
  reducer: {
    article: articleSlice,
    userData: userDataReducer,
    adminData: adminDataReducer,
    adminHeader: adminHeaderReducer,
    auth: authenticationReducer,
    customization: customizationReducer,
    modelSlice: modalReducer,
    userModalSlice: userModalReducer,
  },
});

export default store;
