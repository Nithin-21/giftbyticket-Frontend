import axios from "axios";

const API_URL = "http://localhost:8080/api/winners";

const getToken = () => {
  return localStorage.getItem("token");
};

export const createWinner = (winner) => {
  return axios.post(API_URL, winner, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const getAllWinners = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const getWinnerById = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const updateWinner = (id, winner) => {
  return axios.put(`${API_URL}/${id}`, winner, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const deleteWinner = (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};