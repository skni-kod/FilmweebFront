import React from "react";
import RegisterForm from "./RegisterForm";
import Poster from "./Poster";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box login-container"}>
            <Poster />
            <RegisterForm />
        </main>
    );
};

export default Main;
