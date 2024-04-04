import EmojiComponent from "./EmojiComponent";
import { reviews } from "../../data/data";

const ReviewBox = () => {
  return (
    <>
      <div className="bg-[#F6F6F6] rounded-xl px-3 py-10 flex flex-col justify-center items-center">
        <p className="mb-7 text-[13px] font-SFPro font-medium text-customGray-semiDark">
          Did this article answer your question?
        </p>
        <div className="flex w-[30%]  justify-between">
          {reviews.map((reaction, index) => {
            return <EmojiComponent key={index} react={reaction} />;
          })}
        </div>
      </div>
    </>
  );
};
export default ReviewBox;
