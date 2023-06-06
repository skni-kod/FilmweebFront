import { useQuery } from "react-query";
import backendApi from "../axios";

export const useLogin = () =>
    useQuery(
        "loginStatus",
        async () => {
            const { data } = await backendApi.get("user");
            return data;
        },
        {
            enabled: true,
            retry: false,
        }
    );
