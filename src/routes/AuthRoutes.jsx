import { Routes, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  ForgotPassword,
  SetNewPassword,
} from "../sections/admin/auth";
import Auth from "../pages/auth/Auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" index Component={Login} />
      <Route path="/auth/sign-up" index Component={SignUp} />
      <Route path="/auth/forgot-password" index Component={ForgotPassword} />
      <Route path="/auth/set-password" index Component={SetNewPassword} />
    </Routes>
  );
};
export default AuthRoutes;
