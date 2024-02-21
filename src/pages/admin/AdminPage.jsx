import { Outlet } from "react-router";
import { Header } from "../../components/admin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

  return (
    <>
      <Header />
      <div className="pb-10">
        <Outlet />
      </div>
    </>
  );
};
export default AdminPage;
