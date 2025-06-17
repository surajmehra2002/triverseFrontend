// src/api/services/userService.ts
import axiosInstance from "@/lib/axios";

export const signup = async (name: string, email: string, password: string) => {
  console.log("register data is: ", name, email, password)

  const response = await axiosInstance.post('v1/user/register', {
    name,
    email,
    password,
  });

  console.log("response is: ", response.data)
  return response.data;
};
