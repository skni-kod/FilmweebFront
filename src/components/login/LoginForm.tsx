import React from "react";
import "./loginform.scss";

const LoginForm: React.FC = () => {
    return (
        <div className={"login-form"}>
            <h2 className={"login-copy"}>Logowanie</h2>
            <form action="#" method="post">
                <label htmlFor="userName">Nazwa użytkownika:</label>
                <input
                    type="text"
                    name="userNAme"
                    id="userName"
                    placeholder="Twoja nazwa użytkownika..."
                />
                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Twoje hasło..."
                />
                <button className={"loginButton"}>Zaloguj</button>
            </form>
        </div>
    );
};

export default LoginForm;
