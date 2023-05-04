import React, { useEffect, useState } from "react";
import "./main.scss";
import Poster from "./Poster";

interface MainProps {
    component: React.FC;
}

const Main: React.FC<MainProps> = ({ component: Form }) => {
    const [showPoster, setShowPoster] = useState(window.innerWidth >= 768);

    const handleResize = () => {
        const width = window.innerWidth;
        setShowPoster(width >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <main className={"wrap-box login-container register-container"}>
            {showPoster ? <Poster /> : null}
            <Form />
        </main>
    );
};

export default Main;
