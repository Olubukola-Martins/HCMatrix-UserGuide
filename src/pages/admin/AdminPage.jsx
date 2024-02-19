import { Outlet } from "react-router";
import { Header } from "../../components/admin";

const AdminPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AdminPage;
