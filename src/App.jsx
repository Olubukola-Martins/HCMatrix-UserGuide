import Home from "./Pages/Home";
import styles from "./sass/App.module.scss";

import { Articles, Category } from "./Sections";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
}

export default App;
