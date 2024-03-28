import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerToggle({ page: null }));
  }, []);

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};
export default Dashboard;
