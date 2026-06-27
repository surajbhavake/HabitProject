import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
    baseURL: "https://api.blackfade.site/api/",
});

export default api;