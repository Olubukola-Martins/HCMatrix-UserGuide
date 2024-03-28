import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (msg, success) => {
  if (success) {
    return toast.success(msg);
  }
  return toast.error(msg);
};

export const formValidation = (form) => {
  for (const [key, value] of Object.entries(form)) {
    if (key === "category" && value.includes("select")) {
      notify("Please select a category");
      return false;
    }
    if (key === "subcategory" && value.includes("select")) {
      notify("Please select a Subcategory");
      return false;
    }
    if (key === "leastSubcategory" && value.includes("select")) {
      notify("Please select a least Subcategory");
      return false;
    }

    if (key === "articleTitle" && value === "") {
      notify("Please input a title");
      return false;
    }

    if (key === "articleDescription" && value === "") {
      notify("Please input a description");
      return false;
    }
  }
  notify("Nice work!!", true);
  return true;
};
