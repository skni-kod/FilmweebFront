import http from "axios";
const BASE_API_URL = "http://192.168.1.51/api/";

const backendApi: any = http.create({
    baseURL: BASE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default backendApi;

export interface ApiResponse {
    success: boolean;
    data: any;
    message: string;
    status: number;
    token: string;
}
