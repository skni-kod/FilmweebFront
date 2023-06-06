import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GithubLoginButton } from "react-social-login-buttons";
import backendApi, { ApiResponse } from "../../../axios";
import { useQuery } from "react-query";

const LoginForm: React.FC = () => {
    const [loginUrl, setLoginUrl] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginQuery = useQuery(
        "login",
        async () => {
            const { data } = await backendApi.post("login", {
                email: email,
                password: password,
            });
            return data;
        },
        {
            enabled: false,
            retry: false,
            onSuccess: () => {
                navigate("/");
            },
            cacheTime: 15 * 60 * 1000,
        }
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginQuery.refetch();
    };

    useEffect(() => {
        backendApi
            .get("login/github/redirect")
            .then((response: ApiResponse) => {
                console.log(response);
                setLoginUrl(response.data);
            })
            .catch((error: Error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className={"form"}>
            <form onSubmit={handleSubmit}>
                <h2 className={"copy"}>Logowanie</h2>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Podaj email..."
                    onChange={(e) => {
                        setEmail(e.target.value);
                        console.log(email);
                    }}
                />
                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Twoje hasło..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                    Nie masz konta? Zarejestruj się <Link to="/register">tutaj!</Link>
                </span>
                <button type="submit" className="auth-button">
                    {loginQuery.isLoading ? "..." : "Zaloguj "}
                </button>
            </form>
            {loginUrl != null && (
                <a href={loginUrl}>
                    <GithubLoginButton style={{ fontSize: "15px", height: "40px" }} />
                </a>
            )}
        </div>
    );
};

export default LoginForm;
