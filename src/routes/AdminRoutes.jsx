import { Routes, Route } from "react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import { Dashboard, Insight, Settings } from "../sections/admin";
import { Main } from "../sections/admin/dashboard";
import { Create, Customization, ManageUser } from "../sections/admin/setting";
import { InsightMain, Review } from "../sections/admin/insight";
import { CreateArticle } from "../sections/admin/article";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" Component={AdminPage}>
        {/* Dashboard Routes */}

        <Route path="/admin/dashboard" Component={Dashboard}>
          <Route index Component={Main} />
        </Route>

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
    </Routes>
  );
};
export default AdminRoutes;
