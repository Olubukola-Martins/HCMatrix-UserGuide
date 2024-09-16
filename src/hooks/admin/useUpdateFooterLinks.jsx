import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import axiosInstance from "../../services/AxiosInstance";
import { getSettings } from "../../state/admin/customizationSlice";

export const useUpdateFooterLinks = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateFooterLinks = async (footerLinks) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.put("/settings", { footerLinks });
      setData(response.data);
      dispatch(getSettings());
      toast.success("link updated successfully");
    } catch (err) {
        setError(err);
      toast.error(err.response.data.message ?? err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, updateFooterLinks };
};
