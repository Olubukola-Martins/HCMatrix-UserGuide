import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect } from "react";
// import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../state/admin/adminData/thunkFunctions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerToggle({ page: null }));
    dispatch(getAllCategories());
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <Outlet />
    </>
  );
};
export default Dashboard;
