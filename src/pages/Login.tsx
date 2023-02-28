import React from "react";
import Footer from "components/base/Footer";
import Header from "components/base/Header";
import LoginForm from "components/login/LoginForm";
import Poster from "components/login/Poster";

const Login: React.FC = () => {
    return (
        <>
            <Header />
            <>
                <Poster />
                <LoginForm />
            </>
            <Footer />
        </>
    );
};

export default Login;
