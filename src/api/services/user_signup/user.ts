// src/api/services/userService.ts
import axiosInstance from "@/lib/axios";

export const signup = async (name: string, email: string, password: string) => {

  const response = await axiosInstance.post('v1/user/register', {
    name,
    email,
    password,
  });

  return response;
};
