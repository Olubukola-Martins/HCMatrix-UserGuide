import { useSelector } from "react-redux";
import { Wrapper, ArticleDisplay, AddBtn } from ".";
import { positive, negative, neutral } from "../../assets/common/review";
import { Pagination } from "antd";
import { useState } from "react";
import { NoData } from "../common";
import { usePagination } from "../../hooks/common";

const ArticleReviewBox = ({ type }) => {
  const { filteredSingleCategoryArticles, loading } = useSelector(
    (store) => store.article
  );

  const pageSize = 4;

  const {
    currentPage,
    paginatedData: articlesToShow,
    handlePageChange,
  } = usePagination(filteredSingleCategoryArticles, pageSize);

  return (
    <section className="w-full flex flex-col gap-3">
      <Wrapper
        className={`rounded-[26px] pb-0 bg-white ${loading ? "skeleton" : ""}`}
      >
        {filteredSingleCategoryArticles?.length > 0 ? (
          <section className="h-[22rem] grid grid-rows-[3rem_1fr_1fr_1fr_1fr]">
            {/* Box Heading */}
            <header className="flex h-[3rem] items-center px-6 border-b">
              <span className="w-[45%] text-customGray-semiDark">Articles</span>
              <div className="flex-1   items-center flex">
                <img src={positive} alt="" className=" h-5 flex-1" />
                <img src={neutral} alt="" className="flex-1  h-5" />
                <img src={negative} alt="" className="flex-1  h-5" />
              </div>
              <span className="w-[20%]  grid place-items-center">Action</span>
            </header>

            {/* The Articles */}
            {articlesToShow?.map((each, index) => {
              return <ArticleDisplay key={index} {...each} type={type} />;
            })}
          </section>
        ) : (
          <Wrapper className="flex flex-col justify-center items-center h-[23rem]">
            <NoData
              className="h-24 mb-5 -ml-3 -mt-5"
              msg="No articles, Create Now!!!"
            />
          </Wrapper>
        )}
      </Wrapper>

      {filteredSingleCategoryArticles?.length > 4 && (
        <Pagination
          total={filteredSingleCategoryArticles?.length}
          current={currentPage}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={false}
        />
      )}
    </section>
  );
};
export default ArticleReviewBox;
