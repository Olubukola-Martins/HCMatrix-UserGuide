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
  }
  notify("Nice work!!", true);
  return true;
};
