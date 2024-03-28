import { Container, Wrapper } from "../../../components/admin";
import { BackArrow } from "../../../assets/admin/icons/Insight";
import { pensive, relieved, smiling } from "../../../assets/common/review";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    reaction: "pensive",
    userEmail: "ade@gmail.com",
    date: "24 - 04 - 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fames morbi aenean tortor tortor. Aliquam pellentesque enim ultrices nisi pellentesque vel facilisis quam volutpat. Pellentesque scelerisque et felis tellus leo elit.",
  },
  {
    reaction: "relieved",
    userEmail: "ade@gmail.com",
    date: "24 - 04 - 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fames morbi aenean tortor tortor. Aliquam pellentesque enim ultrices nisi pellentesque vel facilisis quam volutpat. Pellentesque scelerisque et felis tellus leo elit.",
  },
  {
    reaction: "smiling",
    userEmail: "ade@gmail.com",
    date: "24 - 04 - 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fames morbi aenean tortor tortor. Aliquam pellentesque enim ultrices nisi pellentesque vel facilisis quam volutpat. Pellentesque scelerisque et felis tellus leo elit.",
  },
  {
    reaction: "pensive",
    userEmail: "ade@gmail.com",
    date: "24 - 04 - 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fames morbi aenean tortor tortor. Aliquam pellentesque enim ultrices nisi pellentesque vel facilisis quam volutpat. Pellentesque scelerisque et felis tellus leo elit.",
  },
  {
    reaction: "smiling",
    userEmail: "ade@gmail.com",
    date: "24 - 04 - 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fames morbi aenean tortor tortor. Aliquam pellentesque enim ultrices nisi pellentesque vel facilisis quam volutpat. Pellentesque scelerisque et felis tellus leo elit.",
  },
  {
    reaction: "relieved",
    userEmail: "ade@gmail.com",
    date: "24 - 04 - 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fames morbi aenean tortor tortor. Aliquam pellentesque enim ultrices nisi pellentesque vel facilisis quam volutpat. Pellentesque scelerisque et felis tellus leo elit.",
  },
];

const Review = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <header className=" flex justify-between mb-5">
        <div className="flex items-start flex-col self-stretch justify-between">
          <div
            className="py-[0.4rem] rounded-md text-customGray-light px-3 bg-white mb-2 flex gap-2 items-center cursor-pointer"
            onClick={() => navigate("/admin/insight")}
          >
            <BackArrow />
            <span>Back</span>
          </div>

          <h2 className="font-semibold text-3xl mb-3">
            How to create an account
          </h2>
          <span className="text text-customGray-lightest text-md font-semibold">
            Article Feedbacks
          </span>
        </div>

        <div className="  self-stretch flex justify-between flex-col mr-5">
          <div className="flex gap-3 items-center">
            <img src={smiling} alt="" className="h-6" />
            <span className="text-xl text-customGreen-normal font-semibold">
              50%
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <img src={relieved} alt="" className="w-6" />
            <span className="text-xl text-customGray-semiDark font-semibold">
              50%
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <img src={pensive} alt="" className="h-6" />
            <span className="text-xl text-customRed-normal font-semibold">
              0%
            </span>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-4">
        {reviews.map((review) => {
          return (
            <Wrapper>
              <div className="w-[95%] mx-auto text-customGray-light">
                <p className="text-md leading-7 font-medium mb-4">
                  {review?.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-md font-medium">
                    <span>{review?.userEmail}</span>
                    <span className="ml-4">{review?.date}</span>
                  </div>
                  <img
                    className="h-6"
                    src={
                      review.reaction === "pensive"
                        ? pensive
                        : review.reaction === "smiling"
                        ? smiling
                        : relieved
                    }
                    alt="reaction"
                  />
                </div>
              </div>
            </Wrapper>
          );
        })}
      </main>
    </Container>
  );
};
export default Review;
