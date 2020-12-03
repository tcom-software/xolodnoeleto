import axios from "axios";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { serverUrl },
} = getConfig();

const axiosInstance = axios.create({
  baseURL: serverUrl,
  // timeout: 1000,
  headers: {
    projectId: 58,
  },
});

export default axiosInstance;
