import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect } from "react";
import { getAllCategories } from "../../../state/admin/adminData/thunkFunctions";
import { getEmojis } from "../../../state/admin/adminData/thunkFunctions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerToggle({ page: null }));
    dispatch(getAllCategories());
    dispatch(getEmojis());
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};
export default Dashboard;
