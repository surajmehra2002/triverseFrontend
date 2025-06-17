// services/userService.ts
import axiosInstance from "../../axiosInstance";

export const fetchUserProfile = async () => {
  const response = await axiosInstance.get('/user/profile');
  return response.data;
};

export const login = async (email: string, password: string) => {
try{
  const response = await axiosInstance.post('v1/user/login', {  
    email,
    password,
  }); 
  return response.data;
}catch(error){
    console.error("Login error:", error);
}
};
