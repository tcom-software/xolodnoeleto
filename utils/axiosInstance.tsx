import axios from "axios";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { serverUrl },
} = getConfig();

const axiosInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json",
    projectId: 58,
  },
});

export default axiosInstance;
