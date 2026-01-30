import axios from "axios";

const api = axios.create({
  baseURL: "https://onlinetradingplatformbackend.onrender.com/api",
});

export default api;
