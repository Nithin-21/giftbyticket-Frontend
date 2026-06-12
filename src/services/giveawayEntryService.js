import axios from "axios";

const API_URL =
  "http://localhost:8080/api/entries";

const getToken = () => {
  return localStorage.getItem("token");
};

export const createEntry = (request) => {

  return axios.post(
    API_URL,
    request,
    {
      headers: {
        Authorization:
          `Bearer ${getToken()}`
      }
    }
  );
};