import Home from "./Pages/Home";
import Page from "./components/HeroSection";

import { Articles, Category } from "./Sections";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="" Component={Category}></Route>
            <Route path=":category" Component={Articles}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
