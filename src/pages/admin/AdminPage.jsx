import { Outlet } from "react-router";
import { Header } from "../../components/admin";

const AdminPage = () => {
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
