
import axiosInstance from "@/lib/axios";

export const confirm = async ( password_1: string ,password_2:string) => {

  const response = await axiosInstance.post('v1/auth/reset_password', { 
   
    password_1,
    password_2
  });

  return response;
};
