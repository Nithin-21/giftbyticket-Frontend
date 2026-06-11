import axios from "axios";

const API_URL = "http://localhost:8080/api/campaigns";

export const getAllCampaigns = async () => {
  const token = localStorage.getItem("token");

  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createCampaign = async (campaign) => {
  const token = localStorage.getItem("token");

  return axios.post(API_URL, campaign, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteCampaign = async (id) => {
  const token = localStorage.getItem("token");

  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCampaign = async (id, campaign) => {

  const token = localStorage.getItem("token");

  return axios.put(
    `${API_URL}/${id}`,
    campaign,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const getCampaignById = async (id) => {

  const token = localStorage.getItem("token");

  return axios.get(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};