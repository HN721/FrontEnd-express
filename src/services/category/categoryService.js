import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
const token = getUserFromStorage();
//add ccategory API
export const addCategory = async ({ type, name }) => {
  const response = await axios.post(
    `${BASE_URL}categories/create`,
    {
      type,
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const listCategory = async () => {
  const response = await axios.get(`${BASE_URL}categories/lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateCategory = async ({ type, name, id }) => {
  const response = await axios.put(
    `${BASE_URL}categories/update/${id}`,
    {
      type,
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const deleteCategory = async (id) => {
  const response = await axios.delete(`${BASE_URL}categories/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
