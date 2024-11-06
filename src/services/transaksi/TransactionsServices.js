import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
const token = getUserFromStorage();
//add Transkaks API
export const addTransaksi = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const response = await axios.post(
    `${BASE_URL}transaksi/create`,
    {
      type,
      category,
      date,
      description,
      amount,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const listTransaksi = async ({ category, type, startDate, endDate }) => {
  const response = await axios.get(`${BASE_URL}transaksi/lists`, {
    params: { category, type, startDate, endDate },
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
