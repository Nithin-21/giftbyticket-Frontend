import axios from "axios";

const API_URL = "http://localhost:8080/api/coupons";

const getToken = () => {
  return localStorage.getItem("token");
};

export const createCoupon = (coupon) => {
  return axios.post(API_URL, coupon, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const getAllCoupons = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const getCouponById = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const updateCoupon = (id, coupon) => {
  return axios.put(`${API_URL}/${id}`, coupon, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const deleteCoupon = (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};