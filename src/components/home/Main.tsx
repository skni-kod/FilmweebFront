import React from "react";
import Buttons from "./Buttons";
import Section from "./Section";
import CardSlider from "./slider/CardSlider";

const Main: React.FC = () => {
    return (
        <main className={"wrap-box"}>
            <CardSlider/>
            <Buttons/>
            <Section/>
        </main>
    );
}

export default Main;