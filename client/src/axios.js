import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://faithbook.onrender.com/api/",
  /// baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});
