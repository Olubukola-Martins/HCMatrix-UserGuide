// Landing Pages
import Home from "./pages/user/Home";
import AdminPage from "./pages/admin/AdminPage";

//User Sections
import {
  Articles,
  Category,
  NestedCategories,
  Subcategories,
} from "./sections/user";

//Admin Section
import { Dashboard, Insight, Settings } from "./sections/admin";

//DashBoard Sections
import { Main } from "./sections/admin/dashboard";

//Setting Sections
import { Create, Customization, ManageUser } from "./sections/admin/setting";

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ArticleContainer } from "./components/user";
import { Employee } from "./articles";

const App = () => {
  return (
    <>
      <Router>
        {/* For the admin */}
        <Routes>
          <Route path="/admin" Component={AdminPage}>
            {/* Dashboard Routes */}

            <Route path="/admin/dashboard" Component={Dashboard}>
              <Route index Component={Main} />
            </Route>

            {/* Insight Routes */}
            <Route path="/admin/insight" Component={Insight} />

            {/* Settings Routes */}
            <Route path="/admin/setting" Component={Settings}>
              <Route path="/admin/setting/" Component={Create} />
              <Route path="/admin/setting/overview" Component={Customization} />
              <Route path="/admin/setting/manageuser" Component={ManageUser} />
            </Route>
          </Route>
        </Routes>

        {/* For the user */}
        <Routes>
          <Route path="/" Component={Home}>
            {/* ROUTE TO THE CATEGORY COMPONENT */}
            <Route path="" Component={Category} />

            {/* ROUTE TO THE SUBCATEGORY COMPONENT */}
            <Route path="/category/:category" Component={Subcategories} />

            {/* ROUTE TO THE NESTED CATEGORY COMPONENT */}
            <Route
              path="/category/:category/:subcategory/nested"
              Component={NestedCategories}
            />

            {/* ROUTES TO THE ARTICLES COMPONENT */}
            {/* when there is a subcategory*/}
            <Route
              path="/category/:category/:subcategory"
              Component={Articles}
            />

            {/* when there are no subcategories */}
            <Route path="/articles/:category" Component={Articles} />

            {/* Route to the Article with no subcategories */}
            <Route
              path="/articles/:category/:article"
              Component={ArticleContainer}
            >
              <Route path="" Component={Employee}></Route>
            </Route>

            {/* when there are nested categories */}
            <Route
              path="/category/:category/:subcategory/nested/:nestedCategory"
              Component={Articles}
            />

            {/* ROUTES TO THE ARTICLE COMPONENT */}
            <Route
              path="/category/:category/:subcategory/:article"
              Component={ArticleContainer}
            >
              <Route path="" Component={Employee}></Route>
            </Route>

            {/* Route to the article when there is a subCategory */}
            <Route
              path="/category/:category/:subcategory/nested/:nestedCategory/:article"
              Component={ArticleContainer}
            >
              <Route path="" Component={Employee}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
