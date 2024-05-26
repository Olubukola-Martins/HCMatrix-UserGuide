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
  feedbackStats,
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
    dispatch(newArticleModalToggle());
    dispatch(findSingleArticle(id));
    dispatch(editContent(id));
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
    <div className="flex px-6 border-b last:border-none h-full items-stretch">
      <div className="w-[45%] pr-5 flex flex-col justify-center ">
        <h3 className="capitalize text-customGray">{title}</h3>

        <span className="text-[10px] font-light">
          {`Last updated ${dateConverter(updatedAt)} hours ago`}
        </span>
      </div>
      <div className="flex-1 flex h-full font-body text-center">
        <span className="bg-customGreen text-customGreen-normal grid place-items-center text-center h-full  flex-1">
          {`${feedbackStats?.positivePercentage.toFixed(1)}%`}
        </span>
        <span className="grid text-customGreen-normal place-items-center text-center h-full flex-1">
          {`${feedbackStats?.neutralPercentage.toFixed(1)}%`}
        </span>
        <span className="bg-customRed grid place-items-center text-center h-full flex-1 text-customRed-normal">
          {`${feedbackStats?.negativePercentage.toFixed(1)}%`}
        </span>
      </div>
      <div className="w-[20%] relative grid place-items-center">
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
