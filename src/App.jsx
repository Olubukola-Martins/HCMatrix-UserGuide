import Home from "./pages/Home";
import { Articles, Category, SubCategories } from "./sections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleContainer } from "./components";
import { Dummy, Employee } from "./articles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="" Component={Category}></Route>
            <Route path="/categories/:id" Component={SubCategories} />
            <Route path=":id/:articles" Component={Articles} />
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
