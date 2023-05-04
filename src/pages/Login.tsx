import React, { useEffect, useState } from "react";
import Footer from "components/base/Footer";
import Header from "components/base/Header";
import MobileBar from "components/navigation/MobileBar";
import LoginForm from "components/auth/login/LoginForm";
import Main from "components/auth/Main";

const Login: React.FC = () => {
    const [showFooter, setShowFooter] = useState(window.innerWidth >= 768);

    const handleResize = () => {
        const width = window.innerWidth;
        setShowFooter(width >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <Header />
            <Main component={LoginForm} />
            {showFooter ? <Footer /> : <MobileBar />}
        </>
    );
};

export default Login;
