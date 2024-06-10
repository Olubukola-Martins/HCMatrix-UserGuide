import { useSelector } from "react-redux";
import { NoData } from "../components/common";
import SingleArticleSkeleton from "./SingleArticleSkeleton";

const SingleArticle = () => {
  const { articleContent, isLoading } = useSelector((store) => store.userData);

  if (isLoading) {
    return <SingleArticleSkeleton />;
  }

  return (
    <section className="mt-3 font-SFPro article">
      {!articleContent && <NoData msg={`No Content found !!!`} />}
      {articleContent && (
        <header
          className={`flex flex-col items-center ${
            articleContent?.vidoeUrl ? "" : "mb-3"
          } md:flex-row md:items-center md:gap-5`}
        >
          <div className="order-2 md:order-1 w-full md:w-[60%] md:mr-5">
            <h2 className="text-[25px] font-semibold mb-[0.15rem]">
              {articleContent?.title}
            </h2>
            <span className="text-[12px] block mb-3">{`Learn about ${articleContent?.title?.toLowerCase()}`}</span>
            <p className="text-[14px] text-[#3a3a3ab2] leading-6">
              {articleContent?.description}
            </p>
          </div>

          {articleContent?.videoUrl && (
            <div className="order-1 my-5 md:order-2 w-full md:w-[28rem] h-[15rem] md:h-[18rem] border rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`${articleContent?.videoUrl}`}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </header>
      )}

      <main className="article__container">
        {articleContent && (
          <>
            <p className="mt-2 ">
              📚 To execute the above follow the steps below
            </p>
            <section
              dangerouslySetInnerHTML={{ __html: articleContent?.body }}
            />
          </>
        )}
      </main>
    </section>
  );
};

export default SingleArticle;
