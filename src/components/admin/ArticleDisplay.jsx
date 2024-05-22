import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import { menu } from "../../assets/admin/icons/articles";
import { dateConverter } from "../../utils/dateConverter";
import { editContent } from "../../state/admin/articles/articleSlice";
import { newArticleModalToggle } from "../../state/admin/modalSlice";
import { FaSpinner } from "react-icons/fa";
import {
  disableArticlesHandler,
  findSingleArticle,
} from "../../state/admin/articles/thunkFunctions";
import { getReviews } from "../../state/admin/adminData/thunkFunctions";

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

  const disableArticle = () => {
    dispatch(disableArticlesHandler(id));
  };

  const feedbackHandler = () => {
    dispatch(getReviews(id));
    dispatch(findSingleArticle(id));
    navigate("/admin/insight/review");
  };

  const editHandler = () => {
    dispatch(findSingleArticle(id));
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
      <p className="cursor-pointer" onClick={feedbackHandler}>
        View Feedback
      </p>
    </div>
  );

  return (
    <div className="flex px-6 border-b last:border-none items-stretch">
      <div className="flex-1 flex flex-col justify-center ">
        <h3 className="capitalize  text-customGray">{title}</h3>

        <span className="text-[10px] text-semibold">
          {`Last updated ${dateConverter(updatedAt)} hours ago`}
        </span>
      </div>
      <div className="flex-1 flex h-[60px] text-center">
        <span className="bg-customGreen text-customGreen-normal grid place-items-center text-center h-full flex-1">
          {`${articleStats?.positivePercentage.toFixed(2)}%`}
        </span>
        <span className="grid text-customGreen-normal place-items-center text-center h-full flex-1">
          {`${articleStats?.neutralPercentage.toFixed(2)}%`}
        </span>
        <span className="bg-customRed grid place-items-center text-center h-full flex-1 text-customRed-normal">
          {`${articleStats?.negativePercentage.toFixed(2)}%`}
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
