import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add interceptors for auth, error handling
axiosInstance.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    // else{
    //     window.location.href = '/';
    // }
    return config;
});
export default axiosInstance;
