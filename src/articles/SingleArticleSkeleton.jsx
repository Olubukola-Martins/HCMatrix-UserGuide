const SingleArticleSkeleton = () => {
  return (
    <>
      <header
        className={`flex flex-col items-center ${
          true ? "" : "mb-3"
        } md:flex-row md:items-center md:gap-5`}
      >
        <div className="order-2  md:order-1 w-full md:w-[60%] md:mr-5">
          <h2 className="text-[25px] skeleton font-semibold mb-[0.15rem]">
            How to create an account?
          </h2>
          <span className="text-[12px] skeleton block mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[12px] skeleton block mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[12px] skeleton block mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[12px] skeleton block mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[12px] skeleton block mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[12px] skeleton block mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </span>

          <p className="text-[14px] text-[#3a3a3ab2] skeleton leading-6">
            This guide will walk you through the quick and easy steps to create
            your account, so you can start benefiting from all that the
            application offers. Let’s get started.
          </p>
        </div>

        {true && (
          <div className="order-1 my-5 md:order-2 w-full skeleton md:w-[28rem] h-[15rem] md:h-[18rem] border rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ILOnnEW2iRg"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </header>

      <main className="article__container">
        {true && (
          <>
            <p className="mt-2 skeleton ">
              📚 To execute the above follow the steps below
            </p>
          </>
        )}
      </main>
    </>
  );
};
export default SingleArticleSkeleton;
