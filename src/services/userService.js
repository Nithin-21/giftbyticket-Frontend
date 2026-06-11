import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserById = (id) => {

  return axios.get(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

};

export const updateUser = (id, user) => {

  return axios.put(
    `${API_URL}/${id}`,
    user,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

};