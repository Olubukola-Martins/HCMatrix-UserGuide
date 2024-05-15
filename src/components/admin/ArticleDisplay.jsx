import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import { menu } from "../../assets/admin/icons/articles";
import { dateConverter } from "../../utils/dateConverter";
import { editContent } from "../../state/admin/articles/articleSlice";
import { newArticleModalToggle } from "../../state/admin/modalSlice";
import { disableArticlesHandler } from "../../state/admin/articles/thunkFunctions";

const ArticleDisplay = ({
  title,
  updatedAt,
  articleStats,
  type,
  id,
  isPublished,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/admin/insight/review");
  };

  const disableArticle = () => {
    dispatch(disableArticlesHandler(id));
  };

  const editHandler = () => {
    dispatch(editContent(id));
    dispatch(newArticleModalToggle());
  };

  const dashboardContent = (
    <div>
      <p className="cursor-pointer" onClick={editHandler}>
        Edit
      </p>
      <p className="cursor-pointer" onClick={disableArticle}>
        {isPublished ? "Disable" : "Enable"}
      </p>
    </div>
  );

  const insightContent = (
    <div>
      <p className="cursor-pointer" onClick={() => alert("viewing feedback")}>
        View Feedback
      </p>
    </div>
  );

  return (
    <div className="flex px-6 border-b last:border-none items-stretch">
      <div className="flex-1 flex flex-col justify-center ">
        <h3 className="capitalize text-customGray">{title}</h3>

        <span className="text-[10px] text-semibold">
          {`Last updated ${dateConverter(updatedAt)} hours ago`}
        </span>
      </div>
      <div className="flex-1 flex h-[60px] text-center">
        <span className="bg-customGreen text-customGreen-normal grid place-items-center text-center h-full flex-1">
          {`${articleStats?.positivePercentage}%`}
        </span>
        <span className="grid text-customGreen-normal place-items-center text-center h-full flex-1">
          {`${articleStats?.neutralPercentage}%`}
        </span>
        <span className="bg-customRed grid place-items-center text-center h-full flex-1 text-customRed-normal">
          {`${articleStats?.negativePercentage}%`}
        </span>
      </div>
      <div className="w-[25%] relative grid place-items-center">
        <Popover
          content={type === "dashboard" ? dashboardContent : insightContent}
          trigger="click"
          placement="right"
        >
          <img src={menu} alt="" />
        </Popover>
      </div>
    </div>
  );
};
export default ArticleDisplay;
