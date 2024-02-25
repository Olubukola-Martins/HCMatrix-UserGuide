import { Outlet } from "react-router";
import { Header } from "../../components/admin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NewArticleModal } from "../../components/admin/modals";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  const { newArticleModal } = useSelector((store) => store.modelSlice);
  const { showHeader } = useSelector((store) => store.adminHeader);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

  return (
    <>
      {showHeader && <Header />}

      {newArticleModal && <NewArticleModal />}

      <div className="pb-10">
        <Outlet />
      </div>
    </>
  );
};
export default AdminPage;
