import "./Main.scss";
import React from "react";
import Overview from "./Overview";
import Cast from "./Cast";
import CriticsReviews from "./CriticsReviews";
import Trailers from "./Trailers";
import Details from "./Details";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box movie-grid"}>
            <Overview />
            <Cast />
            <CriticsReviews />
            <Trailers />
            <Details />
        </main>
    );
};

export default Main;
