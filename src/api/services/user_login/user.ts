import axiosInstance from "../../axiosInstance";
import { AxiosError } from "axios";

export const fetchUserProfile = async () => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('v1/user/login', {  
      email,
      password,
    }); 
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Login error:", error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || "Login failed");
    } else if (error instanceof Error) {
      console.error("Login error:", error.message);
      throw error;
    } else {
      console.error("Unexpected login error");
      throw new Error("Unexpected login error");
    }
  }
};
