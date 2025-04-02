import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://faithbook.onrender.com/api/",
  withCredentials: true,
});
