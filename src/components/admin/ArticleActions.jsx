import { Link, useNavigate } from "react-router-dom";

const ArticleActions = ({ type, article, id, info }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/admin/insight/review");
  };

  const disableArticleHandler = () => {};
  const editHandler = () => {};

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
      <span className="cursor-pointer" onClick={editHandler(id)}>
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
