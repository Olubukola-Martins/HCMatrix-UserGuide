import { createSlice } from "@reduxjs/toolkit";
import { base, idea } from "../../assets/admin/icons/settings";

const initialState = {
  suggestedArticle: true,
  contactBtn: true,
  badge: true,
  accordion: [
    {
      name: "logo",
      desc: "Pick your company logo that will get displayed on your knowledge base platform for users",
      type: "upload",
      id: "logo",
      toggle: false,
    },
    {
      name: "Header Styles",
      desc: "Customize your header  by adding your desired background image to the overlay.",
      type: "upload",
      id: "header",
      toggle: false,
    },
    {
      name: "Footer links",
      desc: "Set the links that will appear in your bottom footer. Leave a roll blank and its wont show up",
      type: "footer",
      id: "footer",
      toggle: false,
    },
  ],
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
    accordionToggler: (state, action) => {
      const id = action.payload;

      state.accordion = state.accordion.map((content) => {
        if (id === content.id) {
          return { ...content, toggle: !content.toggle };
        } else {
          return { ...content, toggle: false };
        }
      });
    },
  },
});

export const { toggleHandler, accordionToggler } = customizationSlice.actions;
export default customizationSlice.reducer;
