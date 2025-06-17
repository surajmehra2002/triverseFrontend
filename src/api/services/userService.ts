// services/userService.ts
import axiosInstance from "@/lib/axios";

export const fetchUserProfile = async () => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/login', {
    email,
    password,
  });
  return response.data;
};
