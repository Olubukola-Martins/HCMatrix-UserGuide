import { useSelector } from "react-redux";
import { Wrapper, ArticleDisplay, AddBtn } from ".";
import { positive, negative, neutral } from "../../assets/common/review";
import { Pagination } from "antd";
import { useState } from "react";
import { NoData } from "../common";

const ArticleReviewBox = ({ type }) => {
  const { filteredSingleCategoryArticles, loading } = useSelector(
    (store) => store.article
  );

  //Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const articlesToShow = filteredSingleCategoryArticles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full flex flex-col gap-3">
   
      <Wrapper
        className={`rounded-[26px] bg-white ${loading ? "skeleton" : ""}`}
      >
        {filteredSingleCategoryArticles?.length > 0 ? (
          <section className="min-h-[20rem]">
            {/* Box Heading */}
            <header className="flex px-6 pb-3 mt-3 border-b">
              <span className="flex-1 text-customGray-semiDark">Articles</span>
              <div className="flex-1  flex">
                <img src={positive} alt="" className=" h-5 flex-1" />
                <img src={neutral} alt="" className="flex-1  h-5" />
                <img src={negative} alt="" className="flex-1  h-5" />
              </div>
              <span className="w-[25%] grid place-items-center">Action</span>
            </header>

            {/* The Articles */}
            {articlesToShow?.map((each, index) => {
              return <ArticleDisplay key={index} {...each} type={type} />;
            })}
          </section>
        ) : (
          <Wrapper className="flex flex-col justify-center items-center max-h-[20rem] min-h-[20rem]">
            <NoData
              className="h-24 mb-5 -ml-3 -mt-5"
              msg="No articles, Create Now!!!"
            />
          </Wrapper>
        )}
      </Wrapper>

      {filteredSingleCategoryArticles?.length > 5 && (
        <Pagination
          total={filteredSingleCategoryArticles?.length}
          pageSize={pageSize}
          current={currentPage}
          onChange={handlePageChange}
        />
      )}
    </section>
  );
};
export default ArticleReviewBox;

