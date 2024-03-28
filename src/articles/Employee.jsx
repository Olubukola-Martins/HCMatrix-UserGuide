import { testing, another } from "../data/fine";

const Employee = () => {
  const { content, articleDescription, articleTitle } = another;
  const video = false;
  return (
    <section className="mt-3 font-SFPro article">
      <header className="flex gap-3 items-center">
        <div>
          <h2 className="text-[25px] font-semibold mb-1">{articleTitle}</h2>
          <span className="text-[12px] block mb-3">{`Learn about ${articleTitle}`}</span>
          <p className="text-[14px] text-[#3a3a3ab2] leading-6">
            {articleDescription}
          </p>
        </div>
        {video && (
          <div className="h-[15rem] w-[25rem] border rounded-lg">
            this is working well
          </div>
        )}
      </header>

      <main className="article__container">
        <p className="mt-2 ">📚 To execute the above follow the steps below</p>
        <section
          // className="article__container"
          dangerouslySetInnerHTML={{ __html: another.content }}
        />
      </main>
    </section>
  );
};
export default Employee;
