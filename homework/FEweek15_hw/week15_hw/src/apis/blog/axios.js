import axios from "axios";

export const createUser = async (payload) => {
  const { data } = await axios.post(`/api/users`, payload);
  return data;
};

export const readUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data;
};

export const updateUser = async (userId, username) => {
  const { data } = await axios.put(`/api/users/${userId}`, { username });
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};
