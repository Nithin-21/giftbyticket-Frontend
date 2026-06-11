import axios from "axios";

const API_URL = "http://localhost:8080/api/user-coupons";

const getToken = () => {
  return localStorage.getItem("token");
};

export const assignCoupon = (request) => {

  return axios.post(
    API_URL,
    request,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

};

export const getCouponsByUser = (userId) => {

  return axios.get(
    `${API_URL}/user/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

};

export const markCouponUsed = (id) => {

  return axios.put(
    `${API_URL}/use/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

};