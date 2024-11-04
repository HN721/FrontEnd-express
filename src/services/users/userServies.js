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
