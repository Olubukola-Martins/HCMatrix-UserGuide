import { Routes, Route, useLocation } from "react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import { Dashboard, Insight, Settings } from "../sections/admin";
import { Main } from "../sections/admin/dashboard";
import { Create, Customization, ManageUser } from "../sections/admin/setting";
import { InsightMain, Review } from "../sections/admin/insight";
import { CreateArticle } from "../sections/admin/article";
import ProtectedRoutes from "./ProtectedRoutes";
import { Login } from "../sections/admin/auth";
import { useEffect } from "react";

const AdminRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route Component={ProtectedRoutes}>
        <Route path="/admin" Component={AdminPage}>
          {/* Dashboard Routes */}
          <Route path="/admin/dashboard" Component={Dashboard}>
            <Route index Component={Main} />
          </Route>

          {/* Create Article Route */}
          <Route path="/admin/create" Component={CreateArticle} />

          {/* Insight Routes */}
          <Route path="/admin/insight" Component={Insight}>
            <Route index Component={InsightMain}></Route>
            <Route path="/admin/insight/review" Component={Review}></Route>
          </Route>

          {/* Settings Routes */}
          <Route path="/admin/setting" Component={Settings}>
            <Route path="/admin/setting/" Component={Create} />
            <Route path="/admin/setting/overview" Component={Customization} />
            <Route path="/admin/setting/manageuser" Component={ManageUser} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
export default AdminRoutes;
