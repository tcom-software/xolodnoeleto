import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://projects-backend.ru",
  // timeout: 1000,
  headers: {
    projectId: 56,
  },
});

export default axiosInstance;
