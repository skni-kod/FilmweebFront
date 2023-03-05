import "./Main.scss";
import React from "react";
import HeroImage from "./HeroImage";
import KnownFrom from "./KnownFrom";
import Comments from "./Comments";
import Overview from "./Overview";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box actor-grid"}>
            <HeroImage />
            <Overview />
            <KnownFrom />
            <Comments />
        </main>
    );
};

export default Main;
