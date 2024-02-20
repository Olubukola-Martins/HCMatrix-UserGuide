import { Wrapper, ArticleDisplay } from ".";
import { smiling, pensive, relieved } from "../../assets/common/review";

const ArticleReviewBox = () => {
  return (
    <Wrapper className="rounded-[20px] bg-white py-10">
      <header className="flex px-6 my-3">
        <span className="flex-1 ">Articles</span>
        <div className="w-[35%] flex border bg-black">
          <img src={smiling} alt="" className="border h-5 flex-1" />
          <img src={relieved} alt="" className="flex-1 border h-5" />
          <img src={pensive} alt="" className="flex-1 border h-5" />
        </div>

        <span className="w-[30%] grid place-items-center">Action</span>
      </header>
      <ArticleDisplay />
    </Wrapper>
  );
};
export default ArticleReviewBox;
