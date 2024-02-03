import Home from "./pages/Home";
import {
  Articles,
  Category,
  NestedCategories,
  SubCategories,
} from "./sections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleContainer } from "./components";
import { Employee } from "./articles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}>
            {/* ROUTE TO THE CATEGORY  */}
            <Route path="" Component={Category} />

            {/* ROUTE TO THE SUBCATEGORY */}
            {/* This is the subcategories */}
            <Route path="/category/:category" Component={SubCategories} />

            {/* ROUTE TO THE NESTED CATEGORY */}
            <Route
              path="/category/:category/:subcategory/nested"
              Component={NestedCategories}
            />

            {/* ROUTES TO THE ARTICLES */}
            {/* when there is a subcategory*/}
            <Route
              path="/category/:category/:subcategory"
              Component={Articles}
            />

            {/* when there are no subcategories */}
            <Route path="/articles/:category" Component={Articles} />

            {/* when there are nested categories */}
            <Route
              path="/category/:category/:subcategory/nested/:nestedCategory"
              Component={Articles}
            />

            {/* ROUTES TO THE ARTICLES */}

            <Route
              path="/category/:category/:subcategory/:articles"
              Component={ArticleContainer}
            >
              <Route path="" Component={Employee}></Route>
            </Route>

            {/* Route to the Article with no subcategories */}
            <Route
              path="/articles/:category/:articles"
              Component={ArticleContainer}
            >
              <Route path="" Component={Employee}></Route>
            </Route>

            {/* Route to the article when there is a subCategory */}
            <Route
              path="/category/:category/:subcategory/nested/:nestedCategory/:articles"
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
