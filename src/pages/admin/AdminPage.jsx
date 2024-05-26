import { Outlet } from "react-router";
import { Header } from "../../components/admin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NewArticleModal } from "../../components/admin/modals";
import { useDispatch, useSelector } from "react-redux";
import { resetHeaderNav } from "../../state/admin/headerSlice";

const AdminPage = () => {
  const { newArticleModal } = useSelector((store) => store.modelSlice);
  const { showHeader } = useSelector((store) => store.adminHeader);

  const { navMenu, settingsMenu, barToggle } = useSelector(
    (store) => store.adminHeader
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/admin/dashboard");
    dispatch(resetHeaderNav());
  }, []);

  return (
    <>
      {showHeader && <Header />}
      {newArticleModal && <NewArticleModal />}
      <div className={`${barToggle ? "py-48" : "py-[9rem]"}`}>
        <Outlet />
      </div>
    </>
  );
};
export default AdminPage;
