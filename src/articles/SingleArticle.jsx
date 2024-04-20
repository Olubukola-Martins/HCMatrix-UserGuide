import { testArticle } from "../data/dummyArticle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleArticle } from "../state/admin/articleSlice";
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
      <header className={`flex gap-3  items-center ${video ? "" : "mb-3"}`}>
        <div>
          <h2 className="text-[25px] font-semibold mb-[0.15rem]">
            {singleArticle?.articleTitle}
          </h2>
          <span className="text-[12px] block mb-3">{`Learn about ${articleTitle.toLowerCase()}`}</span>
          <p className="text-[14px] text-[#3a3a3ab2] leading-6">
            {singleArticle?.articleDescription}
          </p>
        </div>
        {video && (
          <div className="h-[15rem] w-[25rem] border rounded-lg">
            <iframe src="" frameborder="0"></iframe>
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
