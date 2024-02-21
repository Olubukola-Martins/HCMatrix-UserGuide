import { Menu } from "../../assets/admin/icons/dashboard";
import ArticleActions from "./ArticleActions";

const ArticleDisplay = ({ type, article }) => {
  const { title, active } = article;
  return (
    <div className="flex px-6 border-b last:border-none items-stretch">
      <div className="flex-1 flex flex-col justify-center ">
        <h3 className="capitalize text-customGray">{title}</h3>
        <span className="text-[10px] text-semibold">
          Last updated 2 hours ago
        </span>
      </div>
      <div className="flex-1 flex h-[60px] text-center">
        <span className="bg-customGreen text-customGreen-normal grid place-items-center text-center h-full flex-1">
          50%
        </span>
        <span className="grid text-customGreen-normal place-items-center text-center h-full flex-1">
          50%
        </span>
        <span className="bg-customRed grid place-items-center text-center h-full flex-1 text-customRed-normal">
          0%
        </span>
      </div>
      <div className="w-[25%] relative grid place-items-center">
        <Menu />
        {active && <ArticleActions type={type} />}
      </div>
    </div>
  );
};
export default ArticleDisplay;
