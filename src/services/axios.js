import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, //  for sending cookies in cross-origin requests
});

export default axiosInstance;
