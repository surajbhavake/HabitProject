import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
    // baseURL: "https://api.blackfade.site/api/",
    baseURL: "http://127.0.0.1:8000/api/",
});

export default api;