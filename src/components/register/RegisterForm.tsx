import React, { useState } from "react";
import "./regform.scss";

const RegisterForm: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    return (
        <div className={"login-form"}>
            <form action="#" method="post">
                <h2 className={"login-copy"}>Rejestracja</h2>
                <label htmlFor="userName">Nazwa użytkownika:</label>
                <input type="text" name="userName" id="userName" placeholder="Twoja nazwa użytkownika..." />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Twój email..." />
                <label htmlFor="password">Hasło</label>
                <input type="password" name="password" id="password" placeholder="Twoje hasło..." />
                <label htmlFor="password">Powtórz hasło</label>
                <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Powtórz swoje hasło..." />
                <button type="button" className="loginButton">
                    Zarejestruj
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
