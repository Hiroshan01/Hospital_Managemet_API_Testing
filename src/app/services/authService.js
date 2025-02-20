import api from "../utils/axiosInstance";



const authService = {
  async signUp(name, email, mobile) {
    try {
      const response = await api.post('/auth/sign-up', {
        name,
        email,
        mobile,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async requestOTP(mobile) {
    try {
      const response = await api.post('/auth/request-otp', {
        mobile,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async signInWithOTP(mobile, otp) {
    try {
      const response = await api.post('/auth/sign-in', {
        mobile,
        otp,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async refreshOTP(mobile, oldOTP) {
    try {
      const response = await api.post('/auth/refresh-token', {
        mobile,
        oldOTP,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;

