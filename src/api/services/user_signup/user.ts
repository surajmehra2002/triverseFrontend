// src/api/services/userService.ts
import axiosInstance from "@/lib/axios";

export const signup = async (name: string, email: string, password: string) => {

  const response = await axiosInstance.post('v1/auth/register', {
    name,
    email,
    password,
  });

  return response;
};
