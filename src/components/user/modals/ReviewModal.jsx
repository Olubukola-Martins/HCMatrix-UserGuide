import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormContainer from "../../admin/FormContainer";
import { FormBtn, Input, TextArea } from "../../common";
import { reviews } from "../../../data/data";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  toggleReviewModal,
  submitReview,
} from "../../../state/user/modals/userModalSlice";

const ReviewModal = ({ reaction }) => {
  const { showReviewModal, reactionType } = useSelector(
    (store) => store.userModalSlice
  );

  const dispatch = useDispatch();

  const [review, setReview] = useState({ message: "", email: "" });

  // Get the Emoji
  const emoji = reviews.find((each) => each?.name === reactionType)?.emoji;

  const toggle = () => {
    return dispatch(toggleReviewModal());
  };

  // This is the change handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setReview((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Submit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (review.message === "") {
      toast.error("You cannot leave message empty");
      return;
    }

    console.log(review);

    toggle();
  };

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-10 flex items-center justify-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-10 "
        onClick={() => toggle()}
      ></div>

      {/* The form Container */}
      <div className="relative form border-3 rounded-2xl pr-4 z-20 bg-white w-[95%] md:w-[35%] overflow-y-scroll py-6 pl-6 px-5 shadow-lg my-6">
        <div className="flex items-center flex-col justify-center mb-3">
          <img src={emoji} alt="the reaction" className="mb-5 h-7" />
          <p className="font-medium text-[#3A3A3AE5]">
            How do we review this article?{" "}
          </p>
        </div>

        <form onSubmit={onSubmitHandler}>
          <FormContainer>
            <TextArea
              name="message"
              value={review?.message}
              onChange={onChangeHandler}
              placeholder={`Enter your feedback text here.....`}
            />
          </FormContainer>

          <FormContainer label={`Email(optional)`}>
            <Input
              name="email"
              value={review?.email}
              onChange={onChangeHandler}
            />
          </FormContainer>

          <FormBtn />
        </form>
      </div>
    </div>
  );
};
export default ReviewModal;
