import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base, idea } from "../../assets/admin/icons/settings";
import axiosInstance from "../../services/AxiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import { adminLogo } from "../../assets/admin/images";

const accordion = [
  {
    name: "logo",
    desc: "Pick your company logo that will get displayed on your knowledge base platform for users",
    type: "upload",
    id: "logoUrl",
    toggle: false,
  },
  {
    name: "Header",
    desc: "Customize your header  by adding your desired background image to the overlay.",
    type: "upload",
    id: "headerStyle",
    toggle: false,
  },
  {
    name: "Footer links",
    desc: "Set the links that will appear in your bottom footer. Leave a roll blank and its wont show up",
    type: "footer",
    id: "footerLinks",
    toggle: false,
  },
];

const toggler = [
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
];

const initialState = {
  loading: false,
  suggestedArticle: true,
  contactBtn: true,
  headerStyle: "",
  badge: true,
  accordion: accordion,
  toggler: toggler,
  settings: { logoUrl: adminLogo },
  logoUrl: "",
};

export const getSettings = createAsyncThunk(
  "customization/allSettings",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get("/settings");
      console.log("all settings", response.data.data[0]);
      return response.data.data[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const toggle = createAsyncThunk(
  "customization/toggle",
  async ({ title, checked }, thunkApi) => {
    let name;

    if (title.toLowerCase().includes("suggested")) {
      name = "showSuggestedArticles";
    } else if (title.toLowerCase().includes("contact")) {
      name = "showContactButton";
    } else if (title.toLowerCase().includes("powered")) {
      name = "showPoweredBadge";
    }

    try {
      const response = await axiosInstance
        .put("/settings", {
          [name]: checked,
        })
        .then((res) => {
          if (res.data) {
            thunkApi.dispatch(getSettings());
          }
        });
      toast.success(`${name} updated successfully`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "upload/uploadImage",
  async (file, { rejectWithValue, dispatch }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "userguide uploads");
    formData.append("cloud_name", "");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dshfmegep/image/upload",
        formData
      );

      if (response.data.secure_url) {
        dispatch(getSettings());
      }

      return response.data.secure_url;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendUrlToBackend = createAsyncThunk(
  "upload/sendUrlToBackend",
  async ({ id, url }, { dispatch }) => {
    try {
      const response = await axiosInstance.put("/settings", {
        [id]: url,
      });
      toast.success(`${id} uploaded successfully!`);

      if (response.data) {
        dispatch(getSettings());
      }
      return response.data;
    } catch (error) {
      toast.error("Could not upload image");
      return rejectWithValue(error.response.data);
    }
  }
);

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    toggleHandler: (state, action) => {
      const id = action.payload;

      if (id === "suggested") {
        state.suggestedArticle = !state.suggestedArticle;
      } else if (id === "contact") {
        state.contactBtn = !state.contactBtn;
      } else if (id === "badge") {
        state.badge = !state.badge;
      }
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
  extraReducers: (builder) => {
    builder
      .addCase(getSettings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
        state.contactBtn = state.settings.showContactButton;
        state.badge = state.settings.showPoweredBadge;
        state.suggestedArticle = state.settings.showSuggestedArticles;
        state.headerStyle = state.settings.headerStyle;
      })
      .addCase(getSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(uploadImage.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.imageUrl = action.payload;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(sendUrlToBackend.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendUrlToBackend.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(sendUrlToBackend.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(toggle.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggle.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(toggle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleHandler, accordionToggler } = customizationSlice.actions;
export default customizationSlice.reducer;
