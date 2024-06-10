import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editContent } from "../../state/admin/articles/articleSlice";

const ArticleActions = ({ type, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigate("/admin/insight/review");
  };

  const disableArticleHandler = () => {};

  const editHandler = () => {
    dispatch(editContent());
    navigate("/admin/create");
  };

  if (type === "insight") {
    return (
      <div
        className="articleDisplayModal left-[6rem] cursor-pointer"
        onClick={() => onClickHandler()}
      >
        <span>View feedbacks</span>
      </div>
    );
  }

  return (
    <div className="articleDisplayModal top-2 right-7">
      <span className="cursor-pointer" onClick={editHandler}>
        Edit
      </span>
      <hr className="my-1" />
      <span className="cursor-pointer" onClick={disableArticleHandler(id)}>
        Disable
      </span>
    </div>
  );
};
export default ArticleActions;
