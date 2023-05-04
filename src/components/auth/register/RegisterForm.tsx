import React, { useState } from "react";
import backendApi, { ApiResponse } from "../../../axios";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userName, email, password, repeatPassword);
        try {
            backendApi
                .post("register", {
                    name: userName,
                    email: email,
                    password: password,
                    password_confirmation: repeatPassword,
                })
                .then((response: ApiResponse) => {
                    console.log(response);
                    if (response.status == 201) {
                        navigate("/login");
                    }
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={"form"}>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <h2 className={"copy"}>Rejestracja</h2>
                <label htmlFor="userName">Nazwa użytkownika:</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Twoja nazwa użytkownika..."
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Twój email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Twoje hasło..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Powtórz hasło</label>
                <input
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="Powtórz swoje hasło..."
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <button type="submit" className="auth-button">
                    Zarejestruj
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
