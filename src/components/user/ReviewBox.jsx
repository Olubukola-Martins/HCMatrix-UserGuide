import EmojiComponent from "./EmojiComponent";
import { reviews } from "../../data/data";
import { ReviewModal } from "./modals";
import { useSelector } from "react-redux";


const ReviewBox = () => {
  const { showReviewModal, reactionType } = useSelector(
    (store) => store.userModalSlice
  );


  const findReaction = () => {
    const emoji = reviews.find((each) => {
      return each.name === reactionType;
    }).emoji;
    return emoji;
  };

  return (
    <>
      <div className="bg-[#F6F6F6] rounded-xl px-3 py-10 flex flex-col justify-center items-center">
        <p className="mb-7 text-[13px] font-SFPro font-medium text-customGray-semiDark">
          Did this article answer your question?
        </p>
        <div className="flex w-[60%] md:w-[30%]  justify-between">
          {reviews.map((reaction, index) => {
            return <EmojiComponent key={index} react={reaction} />;
          })}
        </div>

        {showReviewModal && <ReviewModal reaction={() => findReaction()} />}
      </div>
    </>
  );
};
export default ReviewBox;
