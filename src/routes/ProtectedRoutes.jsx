import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "../state/admin/authenticationSlice";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);
  console.log(user);

  const storedUser = localStorage.getItem("user");

  useEffect(() => {
    if (storedUser) {
      dispatch(setCurrentUser(storedUser));
    }
  }, [storedUser]);

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoutes;
