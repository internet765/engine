import axios from "axios";
import AuthServices from "../services/AuthServices";

export const API_URL = process.env.REACT_APP_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredential: true
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("etf"));
  const accessToken = token?.accessToken;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});


api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {

    const originalRequest = error.config;

    if (
      error?.response?.data?.message === "Unauthorized" &&
      error.config &&
      !error.config._isRetry
    ) {
      
      originalRequest._isRetry = true;
      try {
        const token = JSON.parse(localStorage.getItem("etf"));
        const refreshToken = token?.refreshToken;
        const response = await AuthServices.refreshToken(refreshToken);
        localStorage.setItem("etf", JSON.stringify({
          refreshToken: response.data.refreshToken,
          accessToken: response.data.accessToken
        }));
        return api(originalRequest);
      } catch (e) {
        console.log("Ошибка авторизации");
      }
    }
    throw error;
  }
);

export default api;