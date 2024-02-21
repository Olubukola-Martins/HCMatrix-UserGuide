import { useSelector } from "react-redux";
import { Wrapper, ArticleDisplay } from ".";
import { smiling, pensive, relieved } from "../../assets/common/review";

const ArticleReviewBox = ({ type }) => {
  const {
    singleCategory: { articles },
  } = useSelector((store) => store.adminCategory);

  return (
    <Wrapper className="rounded-[28px] bg-white pb-0">
      <header className="flex px-6 pb-3 mt-3  border-b">
        <span className="flex-1 text-customGray-semiDark ">Articles</span>
        <div className="flex-1  flex">
          <img src={smiling} alt="" className=" h-5 flex-1" />
          <img src={relieved} alt="" className="flex-1  h-5" />
          <img src={pensive} alt="" className="flex-1  h-5" />
        </div>

        <span className="w-[25%] grid place-items-center">Action</span>
      </header>
      {articles?.map((each, index) => {
        const article = { ...each, active: false };
        return <ArticleDisplay key={index} article={article} type={type} />;
      })}
    </Wrapper>
  );
};
export default ArticleReviewBox;
