import Home from "./pages/Home";
import { Articles, Category } from "./sections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="" Component={Category}></Route>
            <Route path=":articles" Component={Articles}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
