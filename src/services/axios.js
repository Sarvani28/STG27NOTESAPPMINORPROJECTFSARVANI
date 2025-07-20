import axios from "axios"

const baseURL =
  import.meta.env.VITE_API_BASE_URL || "https://stg27notesappminorprojectsarvani.onrender.com"
axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // ✅ Required for cross-origin cookie access (auth sessions)
  headers: {
    "Content-Type": "application/json",
  },
})

// Optional: intercept requests to add debugging/logging
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log("Sending request to:", config.url)
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
