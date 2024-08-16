import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL + "/api",
});

export const fetchMessages = async () => {
  const response = await api.get("/messages");
  return response.data;
};

export const postMessage = async (content) => {
  const response = await api.post("/message", { content });
  return response.data;
};
