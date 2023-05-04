import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import backendApi from "axios";
const navigate = useNavigate();

export const useLogin = (email: any, password: any) =>
    useQuery(
        "login",
        async () => {
            const { data } = await backendApi.post("login", {
                email: email,
                password: password,
            });
            return data;
        },
        {
            enabled: false, // ja skopiowałem twój kod, ale ta opcja sprawi, że ta asynchroniczna funkcja parę linijek wyżej się nie wykona, dopóki tu nie będzie `true`
            retry: false,
            onSuccess: () => {
                navigate("/");
            },
        }
    );
