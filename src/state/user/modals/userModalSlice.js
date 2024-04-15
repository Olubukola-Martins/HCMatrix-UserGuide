import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showReviewModal: false,
  reactionType: "",
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
});

export const { toggleReviewModal, handleReaction, submitReview } =
  userModalSlice.actions;

export default userModalSlice.reducer;
