import { createSlice } from "@reduxjs/toolkit";
import { articleReview } from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
  showReviewModal: false,
  reactionType: "",
  isLoading: false,
  review: {},
};

const userModalSlice = createSlice({
  name: "userModal",
  initialState,
  reducers: {
    toggleReviewModal: (state, actions) => {
      state.showReviewModal = !state.showReviewModal;
    },
    handleReaction: (state, action) => {
      const reaction = action.payload;
      state.reactionType = reaction;
      state.showReviewModal = !state.showReviewModal;
    },

    submitReview: (state, action) => {
      const review = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(articleReview.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(articleReview.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Thank you!");
      })
      .addCase(articleReview.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { toggleReviewModal, handleReaction, submitReview } =
  userModalSlice.actions;

export default userModalSlice.reducer;
