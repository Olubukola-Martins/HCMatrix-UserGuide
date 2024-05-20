import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/user/Home";



import {
  Articles,
  Category,
  NestedCategories,
  Subcategories,
} from "../sections/user";

import { ArticleContainer } from "../components/user";
import { SingleArticle } from "../articles";

import { useEffect } from "react";

const UserRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
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
        <Route path="/category/:category/:subcategory" Component={Articles} />

        {/* when there are no subcategories */}
        <Route path="/articles/:category" Component={Articles} />

        {/* Route to the Article with no subcategories */}
        <Route path="/articles/:category/:article" Component={ArticleContainer}>
          <Route path="" Component={SingleArticle}></Route>
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
          <Route path="" Component={SingleArticle}></Route>
        </Route>

        {/* Route to the article when there is a subCategory */}
        <Route
          path="/category/:category/:subcategory/nested/:nestedCategory/:article"
          Component={ArticleContainer}
        >
          <Route path="" Component={SingleArticle}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
export default UserRoutes;
