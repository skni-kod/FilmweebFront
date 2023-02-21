import axios from "axios";

const BASE_API_URL = "http://kni.prz.edu.pl:47450/";

const api: any = axios.create({
    baseURL:  BASE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default api;