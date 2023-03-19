import http from "axios";

const BASE_API_URL = "http://172.21.231.46/";

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
}
