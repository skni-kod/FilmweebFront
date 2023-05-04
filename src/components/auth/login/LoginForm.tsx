import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GithubLoginButton } from "react-social-login-buttons";
import backendApi, { ApiResponse } from "../../../axios";

const LoginForm: React.FC = () => {
    const [loginUrl, setLoginUrl] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
        try {
            backendApi
                .post("login", {
                    email: email,
                    password: password,
                })
                .then((response: ApiResponse) => {
                    console.log(response);
                    if (response.status === 200) {
                        navigate("/");
                    }
                });
        } catch (error) {
            console.error(error);
        }
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
                <button type="submit" className="auth-button">
                    Zaloguj
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
