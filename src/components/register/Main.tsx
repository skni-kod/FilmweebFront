import React from "react";
import RegisterForm from "./RegisterForm";
import Poster from "./Poster";
import "./main.scss";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box register-container"}>
            <Poster />
            <RegisterForm />
        </main>
    );
};

export default Main;
