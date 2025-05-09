import axios from "axios";

// export const API_BASE_URL = "http://localhost:8080";
//export const API_BASE_URL = "https://pmsystem-hskdev.onrender.com";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({ baseURL: API_BASE_URL });

const jwt = localStorage.getItem("jwt");

api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
api.defaults.headers.post["Content-Type"] = "application/json";

export default api;
