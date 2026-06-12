import axios from "axios";

const API_URL = "http://localhost:8080/api/dashboard";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserDashboard = (userId) => {

  return axios.get(
    `${API_URL}/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

};