import React, { useEffect, useState } from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import MobileBar from "components/navigation/MobileBar";
import Main from "components/auth/Main";
import RegisterForm from "components/auth/register/RegisterForm";

const Home: React.FC = () => {
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
            <Main component={RegisterForm} />
            {showFooter ? <Footer /> : <MobileBar />}
        </>
    );
};

export default Home;
