import http from "axios";

const BASE_API_URL = "http://kni.prz.edu.pl:47450";

const backendApi: any = http.create({
    baseURL: BASE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export default backendApi;

export interface ApiResponse {
    success: boolean;
    data: any;
    message: string;
}