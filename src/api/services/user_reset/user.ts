import axiosInstance from "@/lib/axios";

export const userreset = async ( email: string) => {

  const response = await axiosInstance.post('v1/auth/forgot_password', {
    email,
  });

  return response;
};
