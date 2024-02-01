import Home from "./pages/Home";
import { Articles, Category, SubCategories } from "./sections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleContainer } from "./components";
import { Employee } from "./articles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}>
            {/* This is my main category card section  */}
            <Route path="" Component={Category} />

            {/* This is ths subcategories */}
            <Route path=":id" Component={SubCategories} />

            {/* This is for the Articles */}
            <Route path=":id/:category" Component={Articles} />

            {/* This is for the content of the article */}
            <Route path=":id/:articles/:article" Component={ArticleContainer}>
              <Route path="" Component={Employee}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
