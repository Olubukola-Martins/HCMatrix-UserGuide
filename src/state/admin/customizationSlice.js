import { createSlice } from "@reduxjs/toolkit";
import { base, idea } from "../../assets/admin/icons/settings";

const initialState = {
  suggestedArticle: true,
  contactBtn: true,
  badge: true,
  toggler: [
    {
      svg: idea,
      id: "suggested",
      title: "show suggested articles",
      desc: "Suggested articles let you surface articles to customers when you view the main page",
      active: true,
    },
    {
      svg: base,
      id: "contact",
      title: "Show Contact us button",
      desc: "This button allow customer to contact you directly from the knowledge base platform",
      active: true,
    },
    {
      svg: base,
      id: "badge",
      title: "Show “Powered by Hcmatrix” Badge",
      desc: "Displaying this badge also make your help center looks cooler than it already is.",
      active: true,
    },
  ],
};

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    toggleHandler: (state, action) => {
      const id = action.payload;

      const active = state.toggler.map((each) => {
        if (each.id === id) {
          return { ...each, active: !each.active };
        }
        return { ...each };
      });

      if (id === "suggested") {
        state.suggestedArticle = !state.suggestedArticle;
      } else if (id === "contact") {
        state.contactBtn = !state.contactBtn;
      } else if (id === "badge") {
        state.badge = !state.badge;
      }

      state.toggler = active;
    },
  },
});

export const { toggleHandler } = customizationSlice.actions;
export default customizationSlice.reducer;
