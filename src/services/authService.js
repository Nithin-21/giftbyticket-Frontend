import api from "../utils/axiosConfig";

export const loginUser = async (email, password) => {

  const response = await api.post(
    "/api/users/login",
    {
      email,
      password,
    }
  );

  return response.data;

};

export const registerUser = async (
  name,
  email,
  mobile,
  password
) => {

  const response = await api.post(
    "/api/users/register",
    {
      name,
      email,
      mobile,
      password,
      role: "USER"
    }
  );

  return response.data;

};