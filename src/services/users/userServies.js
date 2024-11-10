import axios from "axios";
import { BASE_URL } from "../../utils/url";

//Login
export const loginApi = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}login`, {
    email,
    password,
  });
  //return Promise
  return response.data;
};
export const registerApi = async ({ email, password, username }) => {
  const response = await axios.post(`${BASE_URL}register`, {
    email,
    password,
    username,
  });
  //return Promise
  return response.data;
};
export const updatePrifle = async ({ email, password }) => {
  const response = await axios.put(`${BASE_URL}updateProfile`, {
    email,
    password,
  });
  //return Promise
  return response.data;
};
export const changePassword = async ({ password, username }) => {
  const response = await axios.post(`${BASE_URL}changePassword`, {
    email,
    password,
    username,
  });
  //return Promise
  return response.data;
};
