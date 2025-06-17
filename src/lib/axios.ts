// src/lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors if needed
axiosInstance.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default axiosInstance;
