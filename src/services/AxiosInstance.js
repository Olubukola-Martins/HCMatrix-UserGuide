import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.staging.hcmatrix.com/v1/user-guide",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.data.accessToken : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
