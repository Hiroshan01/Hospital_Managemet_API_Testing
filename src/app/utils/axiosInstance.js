import axios from "axios";


const api = axios.create({
  baseURL: "http://customer.app.api.dev.quickeats.lk/api", 
  headers: {
    "Content-Type": "application/json",
  },
});



api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response?.status === 401) {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/signIn"; 
    }
    return Promise.reject(error);
  }
);

export default api;
