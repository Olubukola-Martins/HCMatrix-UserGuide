import { Container, Wrapper } from "../../../components/admin";
import { BackArrow } from "../../../assets/admin/icons/Insight";
import { negative, neutral, positive } from "../../../assets/common/review";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../state/admin/articles/articleSlice";
import { NoData } from "../../../components/common";

const Review = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reviews, isLoading } = useSelector((store) => store.adminData);
  const { articleInfo } = useSelector((store) => store.article);

  const backHandler = () => {
    dispatch(reset());
    navigate("/admin/insight");
  };

  const placeholder = [1, 2, 3, 4];

  return (
    <Container>
      <header className="flex justify-between mb-5">
        <div className="flex items-start flex-col self-stretch justify-between">
          <div
            className="py-[0.4rem] rounded-md text-customGray-light px-3 bg-white mb-3 flex gap-2 items-center cursor-pointer"
            onClick={backHandler}
          >
            <BackArrow />
            <span>Back</span>
          </div>

          {isLoading ? (
            <h2 className="font-semibold text-3xl skeleton mb-2">Loading</h2>
          ) : (
            <h2 className="font-semibold text-3xl mb-3 capitalize">
              {articleInfo?.title}
            </h2>
          )}

          <span className="text text-customGray-lightest text-md font-semibold">
            Article Feedbacks
          </span>
        </div>

        <div className="  self-stretch flex justify-between flex-col mr-5">
          <div className="flex gap-3 items-center">
            <img src={positive} alt="" className="h-6" />

            {isLoading ? (
              <span className="text-lg py-1 mb-1 skeleton text-customGreen-normal font-semibold">
                50%
              </span>
            ) : (
              <span className="text-lg text-customGreen-normal font-semibold">
                {articleInfo?.feedbackStats?.positivePercentage}%
              </span>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <img src={neutral} alt="" className="h-6" />

            {isLoading ? (
              <span className="text-lg py-1 mb-1 text-customGray-semiDark skeleton font-semibold">
                50%
              </span>
            ) : (
              <span className="text-lg text-customGray-semiDark font-semibold">
                {articleInfo?.feedbackStats?.neutralPercentage}%
              </span>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <img src={negative} alt="" className="h-6" />

            {isLoading ? (
              <span className="text-lg py-1 mb-1 text-customRed-normal skeleton font-semibold">
                50%
              </span>
            ) : (
              <span className="text-lg text-customRed-normal font-semibold">
                {articleInfo?.feedbackStats?.negativePercentage}%
              </span>
            )}
          </div>
        </div>
      </header>

      <main
        className={`grid ${
          reviews.length === 0 && !isLoading ? "" : "grid-cols-2 gap-4"
        }`}
      >
        {isLoading ? (
          placeholder.map((each, index) => {
            return (
              <Wrapper
                key={index}
                className={`skeleton rounded-lg bg-white h-auto`}
              >
                <div className="w-[95%] mx-auto text-customGray-light">
                  <p className="text-md leading-7 font-medium mb-4">
                    This is the way of the world and this is the move of the
                    planet
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-md font-medium">
                      <span>Placeholder@gmail.com</span>
                      <span className="ml-4">01/01/2024</span>
                    </div>
                    <img
                      className="h-6"
                      src={
                        "negative" === "negative"
                          ? negative
                          : "positive" === "positive"
                          ? positive
                          : neutral
                      }
                      alt="reaction"
                    />
                  </div>
                </div>
              </Wrapper>
            );
          })
        ) : reviews.length > 0 ? (
          reviews.map((review, index) => {
            return (
              <Wrapper key={index}>
                <div className="w-[95%] mx-auto text-customGray-light">
                  <p className="text-md leading-7 font-medium mb-4">
                    {review?.comment}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-md font-medium">
                      <span>{review?.email}</span>
                      <span className="ml-4">{review?.date}</span>
                    </div>
                    <img
                      className="h-6"
                      src={
                        review?.type === "negative"
                          ? negative
                          : review?.type === "positive"
                          ? positive
                          : neutral
                      }
                      alt="reaction"
                    />
                  </div>
                </div>
              </Wrapper>
            );
          })
        ) : (
          <div>
            <NoData
              className={`h-28 mb-5 mr-3`}
              msg="There are no reviews yet!!"
            />
          </div>
        )}
      </main>
    </Container>
  );
};
export default Review;
