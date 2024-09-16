import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { Wrapper, ArticleDisplay } from ".";
import { positive, negative, neutral } from "../../assets/common/review";
import { Pagination } from "antd";
import { NoData } from "../common";
import { updateOffset } from "../../state/admin/articles/articleSlice";
import { usePagination } from "../../hooks/common";

const ArticleReviewBox = ({ type }) => {
  const { filteredSingleCategoryArticles, loading, limit,offset } = useSelector((store) => store.article);
  const { mainCategories } = useSelector((store) => store.adminData);
  const dispatch = useDispatch();
  const totalArticles = useMemo(() => mainCategories.find((article) => article.active)?.articlesCount ?? 0, [mainCategories]);
  const currentPage = useMemo(() => offset / limit + 1, [offset, limit]);
  // const { currentPage, paginatedData: articlesToShow, handlePageChange } = usePagination(filteredSingleCategoryArticles, limit);

  return (
    <section className="w-full flex flex-col gap-3">
      <Wrapper className={`rounded-[26px] pb-0 bg-white ${loading ? "skeleton" : ""}`}>
        {filteredSingleCategoryArticles?.length > 0 ? (
          <section className="h-[22rem] grid grid-rows-[3rem_1fr_1fr_1fr_1fr]">
            {/* Box Heading */}
            <header className="flex h-[3rem] items-center  justify-between md:justify-start px-6 border-b">
              <span className="w-[45%] text-customGray-semiDark">Articles</span>
              <div className="flex-1 hidden sm:flex items-center ">
                <img src={positive} alt="" className=" h-5 flex-1" />
                <img src={neutral} alt="" className="flex-1  h-5" />
                <img src={negative} alt="" className="flex-1  h-5" />
              </div>
              <span className="w-[20%]  grid place-items-center">Action</span>
            </header>

            {/* The Articles */}
            {filteredSingleCategoryArticles?.map((each, index) => {
              return <ArticleDisplay key={index} {...each} type={type} />;
            })}
          </section>
        ) : (
          <Wrapper className="flex flex-col justify-center items-center h-[23rem]">
            <NoData className="h-24 mb-5 -ml-3 -mt-5" msg="No articles, Create Now!!!" />
          </Wrapper>
        )}
      </Wrapper>

      {totalArticles > 4 && (
        <Pagination
          total={totalArticles}
          current={currentPage}
          pageSize={limit}
          onChange={(page) => {
            dispatch(updateOffset((page - 1) * limit));
          }}
          // onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={false}
        />
      )}
    </section>
  );
};
export default ArticleReviewBox;
