import axios from "axios";

// Base Axios Instance
const api = axios.create({
  baseURL: "https://ottadmin.imboxocinema.com/api", // Base url
  headers: {
    "Content-Type": "application/json",
  },
});

// Global GET api method
// const getRequest = async (url, params = {}) => {
//   try {
//     const response = await api.get(url, { params });
//     return response.data;
//   } catch (error) {
//     console.error("GET Error:", error);
//     return error.response.data;
//   }
// };

// Global POST api method
const postRequest = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    return error.response.data;
  }
};

// Global PUT api method
const putRequest = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT Error:", error);
    return error.response.data;
  }
};

// Global DELETE api method
const deleteRequest = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error("DELETE Error:", error);
    return error.response.data;
  }
};

const getRequest = async (url, params = {}) => {
  try {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    return error.response.data;
  }
};

export { getRequest, postRequest, putRequest, deleteRequest };
