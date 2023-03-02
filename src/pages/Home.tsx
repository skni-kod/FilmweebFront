import React, { useEffect, useState } from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Main from "../components/home/Main";
import MobileBar from "components/navigation/MobileBar";

const Home: React.FC = () => {
    const [showFooter, setShowFooter] = useState(true);
    const [showMobileBar, setShowMobileBar] = useState(false);

    const handleResize = () => {
        const width = window.innerWidth;
        setShowFooter(width >= 768);
        setShowMobileBar(width <= 768);
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
            <Main />
            {showMobileBar  ? <MobileBar /> : null}
            {showFooter ? <Footer /> : null}
        </>
    );
};

export default Home;
