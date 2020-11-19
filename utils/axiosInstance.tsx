import axios from "axios";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { serverUrl },
} = getConfig();

const axiosInstance = axios.create({
  baseURL: serverUrl,
  // timeout: 1000,
  headers: {
    projectId: 56,
  },
});

export default axiosInstance;
