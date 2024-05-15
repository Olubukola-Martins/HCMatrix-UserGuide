import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ArticleDisplay, AddBtn } from ".";
import { smiling, pensive, relieved } from "../../assets/common/review";
import { Pagination, Space } from "antd";
import { useState } from "react";
import { NoData } from "../common";

const ArticleReviewBox = ({ type }) => {
  const dispatch = useDispatch();
  const { mainCategoryId } = useSelector((store) => store.adminData);
  const { singleCategoryArticles, loading } = useSelector(
    (store) => store.article
  );

  //Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const articlesToShow = singleCategoryArticles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full flex flex-col gap-3">
      {/* {loading ? <div className="rounded-[26px] bg-white min-h-[22.5rem] skeleton"></div>} */}
      <Wrapper
        className={`rounded-[26px] bg-white ${loading ? "skeleton" : ""}`}
      >
        {singleCategoryArticles?.length ? (
          <section className="min-h-[20rem]">
            {/* Box Heading */}
            <header className="flex px-6 pb-3 mt-3 border-b">
              <span className="flex-1 text-customGray-semiDark">Articles</span>
              <div className="flex-1  flex">
                <img src={smiling} alt="" className=" h-5 flex-1" />
                <img src={relieved} alt="" className="flex-1  h-5" />
                <img src={pensive} alt="" className="flex-1  h-5" />
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

      {singleCategoryArticles?.length > 5 && (
        <Pagination
          total={singleCategoryArticles?.length}
          pageSize={pageSize}
          current={currentPage}
          onChange={handlePageChange}
        />
      )}
    </section>
  );
};
export default ArticleReviewBox;

// className={`rounded-[26px] bg-white min-h-[22.5rem] ${
//   loading ? "skeleton" : ""
// }`}

// {singleCategoryArticles?.length ? (
//   <section>
//     {/* Box Heading */}
//     <header className="flex px-6 pb-3 mt-3 border-b">
//       <span className="flex-1 text-customGray-semiDark">Articles</span>
//       <div className="flex-1  flex">
//         <img src={smiling} alt="" className=" h-5 flex-1" />
//         <img src={relieved} alt="" className="flex-1  h-5" />
//         <img src={pensive} alt="" className="flex-1  h-5" />
//       </div>
//       <span className="w-[25%] grid place-items-center">Action</span>
//     </header>

//     {/* The Articles */}
//     {articlesToShow?.map((each, index) => {
//       return <ArticleDisplay key={index} {...each} type={type} />;
//     })}
//   </section>
// ) : (

// )}
