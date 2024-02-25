import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headerToggle } from "../../../state/admin/headerSlice";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerToggle({ page: null }));
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};
export default Dashboard;
