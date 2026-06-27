import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: "https://habitproject-production.up.railway.app/api/",
});

export default api;