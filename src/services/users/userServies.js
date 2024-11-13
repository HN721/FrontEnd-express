import axios from "axios";
import { BASE_URL } from "../../utils/url";

// Login
export const loginApi = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Register
export const registerApi = async ({ email, password, username }) => {
  try {
    const response = await axios.post(`${BASE_URL}register`, {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update Profile
export const updateProfile = async ({ email, password }) => {
  try {
    const response = await axios.put(`${BASE_URL}updateProfile`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Change Password
export const changePassword = async ({ password, username }) => {
  try {
    const response = await axios.post(`${BASE_URL}changePassword`, {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Error handling function
const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error("Server responded with an error:", error.response.data);
  } else if (error.request) {
    // Request was made but no response received
    console.error("No response received:", error.request);
  } else {
    // Error setting up the request
    console.error("Axios error:", error.message);
  }
};
