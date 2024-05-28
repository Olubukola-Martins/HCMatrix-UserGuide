import { Routes, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  ForgotPassword,
  SetNewPassword,
  SetPassword,
} from "../sections/admin/auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" index Component={Login} />
      <Route path="/auth/sign-up" index Component={SignUp} />
      <Route path="/auth/forgot-password" index Component={ForgotPassword} />
      <Route path="/auth/verify-invite" index Component={SetPassword} />
      <Route path="/auth/reset-password" index Component={SetPassword} />
      <Route path="/auth/set-password" index Component={SetNewPassword} />
    </Routes>
  );
};
export default AuthRoutes;
