import Home from "./Pages/Home";
import Page from "./components/Page";

import { Articles, Category } from "./Sections";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Page user="Basil" />
      </div>
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
