import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleArticle } from "../state/admin/articles/articleSlice";
import { useEffect } from "react";

const SingleArticle = () => {
  const { category, article } = useParams();
  const { singleArticle } = useSelector((store) => store.article);
  const dispatch = useDispatch();
  const { allArticles } = useSelector((store) => store.article);

  useEffect(() => {
    dispatch(getSingleArticle({ name: article, category: category }));
  }, [category, article]);

  const { content, articleDescription, articleTitle, video } = allArticles[2];

  return (
    <section className="mt-3 font-SFPro article">
      <header
        className={`flex flex-col items-center ${
          video ? "" : "mb-3"
        } md:flex-row md:items-center md:gap-5`}
      >
        <div className="order-2 md:order-1 w-full md:w-[60%] md:mr-5">
          <h2 className="text-[25px] font-semibold mb-[0.15rem]">
            {singleArticle?.articleTitle}
          </h2>
          <span className="text-[12px] block mb-3">{`Learn about ${articleTitle.toLowerCase()}`}</span>
          <p className="text-[14px] text-[#3a3a3ab2] leading-6">
            {singleArticle?.articleDescription}
          </p>
        </div>

        {video && (
          <div className="order-1 my-5 md:order-2 w-full md:w-[28rem] h-[15rem] md:h-[18rem] border rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ILOnnEW2iRg"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </header>

      <main className="article__container">
        <p className="mt-2 ">📚 To execute the above follow the steps below</p>
        <section dangerouslySetInnerHTML={{ __html: singleArticle?.content }} />
      </main>
    </section>
  );
};

export default SingleArticle;
