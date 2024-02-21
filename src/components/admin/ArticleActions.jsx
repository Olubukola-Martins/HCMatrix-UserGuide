const ArticleActions = ({ type, article }) => {
  if (type === "insight") {
    return (
      <div className="articleDisplayModal left-[6rem]">
        <span>View feedbacks</span>
      </div>
    );
  }

  return (
    <div className="articleDisplayModal top-2 right-7">
      <span>Edit</span>
      <span>Disable</span>
    </div>
  );
};
export default ArticleActions;
