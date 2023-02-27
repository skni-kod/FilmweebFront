import React from "react";
import Footer from "components/base/Footer";
import Header from "components/base/Header";
import LoginForm from "components/loginform/LoginForm";

const Login: React.FC = () => {
    return (
        <>
            <Header />
            <LoginForm />
            <Footer />
        </>
    );
};

export default Login;
