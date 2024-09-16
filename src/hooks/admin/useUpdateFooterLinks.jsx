import { useState } from "react";
import axiosInstance from '../../services/AxiosInstance'

export const useUpdateFooterLinks = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateFooterLinks = async (footerLinks) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.put("/settings", { footerLinks });
      setData(response.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, updateFooterLinks };
};
