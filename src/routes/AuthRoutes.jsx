import { Routes, Route } from "react-router-dom";
import { Login, SignUp, ForgotPassword } from "../sections/admin/auth";
import Auth from "../pages/auth/Auth";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" Component={Auth}>
        <Route path="/auth/login" index Component={Login} />
        <Route path="/auth/sign-up" index Component={SignUp} />
        <Route path="/auth/forgot-password" index Component={ForgotPassword} />
      </Route>
    </Routes>
  );
};
export default AuthRoutes;
