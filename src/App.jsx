import { UserRoutes, AdminRoutes, AuthRoutes } from "./routes";
import { ToastContainer } from "react-toastify";

//React Router Dom
import { BrowserRouter as Router } from "react-router-dom";




const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        {/* For the admin */}

        <AuthRoutes />

        <AdminRoutes />

        {/* For the user */}
        <UserRoutes />
      </Router>
    </>
  );
};

export default App;
