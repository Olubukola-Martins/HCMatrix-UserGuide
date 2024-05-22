import { Routes, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  ForgotPassword,
  SetNewPassword,
  VerifyPassword,
} from "../sections/admin/auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" index Component={Login} />
      <Route path="/auth/sign-up" index Component={SignUp} />
      <Route path="/auth/forgot-password" index Component={ForgotPassword} />
      <Route path="/auth/verify-password" index Component={VerifyPassword} />
      <Route path="/auth/set-password" index Component={SetNewPassword} />
    </Routes>
  );
};
export default AuthRoutes;
