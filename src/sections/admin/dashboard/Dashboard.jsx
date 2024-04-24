import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const data = user.data.user;

  useEffect(() => {
    dispatch(headerToggle({ page: null }));

    // toast.success(
    //   `Welcome, ${data?.isAdmin ? "Admin" : user.data.user.fullName}`
    // );
  }, []);

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};
export default Dashboard;
