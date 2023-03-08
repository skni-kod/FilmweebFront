import React from "react";
import LoginForm from "./LoginForm";
import Poster from "./Poster";
import "./main.scss";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box login-container"}>
            <Poster />
            <LoginForm />
        </main>
    );
};

export default Main;
